import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
export function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink className="brand" to="/" aria-label="Home">
            &#9812;
          </NavLink>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <button
            className="login-button"
            type="button"
            onClick={() => navigate("/login")}
            aria-label="Go to login page"
          >
            <IoMdLogOut />
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
