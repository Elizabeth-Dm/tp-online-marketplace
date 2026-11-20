import { render } from "preact";
import "./styles/index.scss";
import { LoginPage } from "./LoginPage/LoginPage";
import { BasketPage } from "./BasketPage/BasketPage";
import { ProductPage } from "./ProductPage/ProductPage";

function App() {
  // Берем путь без последнего слэша, если он есть
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/basket") return <BasketPage />;
  if (path === "/product") return <ProductPage />;
  return <LoginPage />;
}

render(<App />, document.getElementById("app")!);