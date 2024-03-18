import { useState } from "react";
import Dropdown from "./components/Dropdown";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";

function App() {

  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ]

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );

}

export default App;
