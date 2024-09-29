
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Yousef
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/logs">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
