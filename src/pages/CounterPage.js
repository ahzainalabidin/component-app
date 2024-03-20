import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';

const reducer = (state, action) => {

    if (action.type === INCREMENT_COUNT) {
        return {
            ...state,
            count: state.count + 1,
        };
    }

    if (action.type === SET_VALUE_TO_ADD) {
        return {
            ...state,
            valueToAdd: action.payload,
        };
    }

    return state;

};

function CounterPage({ initialCount }) {

    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        // setCount(count - 1);
    };

    const handleChange = (event) => {

        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };

    return (
        <Panel className="m-3">

            <h1 className="text-lg">Count is {state.count}</h1>

            <div className="flex flex-row">
                <Button outline onClick={increment}>Increment</Button>
                <Button outline onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                />
                <Button outline>Add it!</Button>
            </form>

        </Panel>
    );

}

export default CounterPage;
