import { Provider } from "react-redux";
import Header from "./components/Header";
import Product from "./components/Product";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dunnmy-products";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="bg-neutral-700 min-h-screen ">
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((p) => (
            <Product key={p.id} {...p} />
          ))}
        </Shop>
      </div>
    </Provider>
  );
}

export default App;
