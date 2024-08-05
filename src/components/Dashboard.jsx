import UpcomingLaunchCard from "./UpcomingLaunchCard";
import LaunchFacilitiesCard from "./LaunchFacilitiesCard";
import StarlinkCard from "./StarlinkCard";
import PreviousLaunchCard from "./PreviousLaunchCard";
import bgImg from "../assets/img/bg1.jpg";

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gradient-to-r shadow-lg from-gray-700 via-gray-900 to-black text-white relative rounded-r-lg scrollbar">
      <img
        src={bgImg}
        alt="Bg-img"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover rounded-r-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-r-lg"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 overflow-y-scroll scrollbar  3xl:place-items-center rounded-r-lg max-h-full">
        {/* upcoming launch */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
          <UpcomingLaunchCard />
        </div>

        {/* launch facilities */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
          <LaunchFacilitiesCard />
        </div>

        {/* previous launch */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
          <PreviousLaunchCard />
        </div>

        {/* starlink card */}
        <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-60 text-white">
          <StarlinkCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
