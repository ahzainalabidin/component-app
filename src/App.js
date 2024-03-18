
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

function App() {

  return (
    <div>

      <Sidebar />

      <div>

        <Route path="/">
          <DropdownPage />
        </Route>

        <Route path="/accordion">
          <AccordionPage />
        </Route>

        <Route path="/button">
          <ButtonPage />
        </Route>

      </div>

    </div>
  );

}

export default App;
