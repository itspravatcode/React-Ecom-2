import "./App.css";
import Home from "./componets/Home.tsx";
import SideBar from "./componets/SideBar.tsx";
import Products from "./componets/Products.tsx";
import { Routes, Route } from "react-router-dom";
import Category from "./componets/Category.tsx";

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="product" element={<Products/>}/>
          <Route path="category/:categoryName" element={<Category />} />
        </Route>
      </Routes>
      <SideBar/>
 
    
    </>
  );
}

export default App;
