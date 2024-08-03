import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <>
      <div className="bg-white w-60 py-16 px-8 shadow-lg h-[]">
        <div className="mb-6">
          <img src="../assets/spaceX-Logo" alt="spacex-logo"/>
        </div>
        <nav className="mt-20">
          <ul>
            <li className="mb-4 text-lg font-semibold">
              <Link>Dashboard</Link>
            </li>
            <li className="text-lg">
              <Link>Rockets</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
