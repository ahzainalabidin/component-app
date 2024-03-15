import Button from "./Button";
import { GoBell } from "react-icons/go";

function App() {
  return (
    <div>

      <div>
        <Button secondary outline rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>

      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>

      <div>
        <Button warning>
          See Deal!
        </Button>
      </div>

      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>

      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>

    </div>
  );
}

export default App;
