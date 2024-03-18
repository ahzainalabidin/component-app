import Dropdown from "./components/Dropdown";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";

function App() {

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ]

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );

}

export default App;
