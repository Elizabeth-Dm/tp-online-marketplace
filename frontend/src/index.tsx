import { render } from "preact";
import "./styles/index.scss";
import { LoginPage } from "./LoginPage/LoginPage";

function App() {
  return <LoginPage />;
}

render(<App />, document.getElementById("app")!);
