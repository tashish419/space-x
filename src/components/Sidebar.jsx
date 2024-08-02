import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white w-64 p-6 shadow-lg">
        <div className="mb-6">
          <img />
        </div>
        <nav>
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
