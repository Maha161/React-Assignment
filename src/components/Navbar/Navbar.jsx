import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-700 fixed top-0 left-0 w-full z-50">
        <div className="container flex items-center py-6">
          <Link to="/" className="logo cursor-pointer text-white text-2xl uppercase font-bold">
            Start Framework
          </Link>
          <ul className="ml-auto flex items-center gap-5 text-xs font-bold text-white uppercase">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `p-2 ${isActive ? "bg-main rounded-md" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `p-2 ${isActive ? "bg-main rounded-md" : ""}`
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `p-2 ${isActive ? "bg-main rounded-md" : ""}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
