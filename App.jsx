import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Product } from "./pages/Product";
import { Product1 } from "./pages/Product1";
import { Product2 } from "./pages/Product2";
import { Product3 } from "./pages/Product3";
import { P404 } from "./pages/P404";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />

          <Route path="products" element={<Product />}>
            <Route
              index
              element={
                <div className="product-placeholder">
                  <h3>Select a product from the sidebar.</h3>
                </div>
              }
            />
            <Route path="product1" element={<Product1 />} />
            <Route path="product2" element={<Product2 />} />
            <Route path="product3" element={<Product3 />} />
          </Route>

          <Route path="*" element={<P404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
