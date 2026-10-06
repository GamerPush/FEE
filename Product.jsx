import { Link, Outlet } from "react-router-dom";

export function Product() {
  return (
    <div className="h95 fx">
      <aside className="fy w10 p3 bg52">
        <Link to="product1">Product 1</Link>
        <Link to="product2">Product 2</Link>
        <Link to="product3">Product 3</Link>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}