import Accordion from "./components/Accordion";
import ButtonPage from "./pages/ButtonPage";

function App() {

  const items = [
    {
      id: '1',
      label: 'Can I use React on a project?',
      content: 'You can use on any project you want.'
    },
    {
      id: '2',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use on any project you want.'
    },
    {
      id: '3',
      label: 'Can I use CSS on a project?',
      content: 'You can use on any project you want.'
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );

}

export default App;
