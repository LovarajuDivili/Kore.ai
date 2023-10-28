import { initiateWindow } from "./initiateWindow";
import { WelcomeWidget } from "./WelcomeTemplate/WelcomeWidget";
const App = () => {
  initiateWindow();

  return (
    <>
      <div
        className="container"
        style={{ fontSize: "25px", fontWeight: "700" }}
      >
        Kore AI WebSDK New Version
      </div>
      <WelcomeWidget />
    </>
  );
};

export default App;
