import { Link } from "react-router-dom";
import { SPACEX_LOGO } from "../assets/constants";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white w-60 py-10 px-8 shadow-lg rounded-l-lg">
        <div className="mb-6 ">
          <Link to="/">
            <img src={SPACEX_LOGO} alt="spacex-logo" />
          </Link>
        </div>
        <nav className="mt-20 ml-5">
          <ul>
            <li className="mb-4 text-2xl font-semibold hover:bg-zinc-100 hover:rounded-lg">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="mb-4 text-2xl hover:bg-zinc-100 hover:rounded-lg">
              <Link to="/rockets">Rockets</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
