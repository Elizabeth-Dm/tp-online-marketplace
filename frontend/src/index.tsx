import { render } from "preact";
import Router from "preact-router";
import "./styles/index.scss";

import { LoginPage } from "./LoginPage/LoginPage";
import { BasketPage } from "./BasketPage/BasketPage";

function App() {
  return (
    <Router>
      <LoginPage path="/" />
      <BasketPage path="/basket" />
    </Router>
  );
}

render(<App />, document.getElementById("app")!);