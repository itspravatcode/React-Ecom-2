import "./App.css";
import Home from "./componets/Home.tsx";
import SideBar from "./componets/SideBar.tsx";
import Products from "./componets/Products.tsx";
import { Routes, Route } from "react-router-dom";
import Category from "./componets/Category.tsx";
import Cart from "./componets/Cart.tsx";
import Description from "./componets/Description.tsx";

function App() {
  return (
    <div className="flex">
      <div className="basis-1/5">
        <SideBar />
      </div>
      <div className="basis-4/5">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="products" element={<Products />}>
              <Route
                path="description/:descriptionId"
                element={<Description />}
              />
            </Route>
            <Route path="category/:categoryName" element={<Category />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
