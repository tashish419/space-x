import { BG_URL } from "../assets/constants";
import LaunchCard from "./LaunchCard";
import LaunchFacilitiesCard from "./LaunchFacilitiesCard";


const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white relative rounded-r-lg">
      <img src={BG_URL} alt="Bg-img" className="absolute inset-0 w-[98%] h-full object-cover"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">

        {/* upcoming launch */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
            <LaunchCard/>
        </div>
        

        {/* launch facilities */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
            <LaunchFacilitiesCard/>
        </div>

        {/* previous launch */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
            <LaunchCard/>
        </div>

        {/* starlink card */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
            <LaunchCard/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
