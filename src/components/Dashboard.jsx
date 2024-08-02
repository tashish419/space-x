import LaunchCard from "./LaunchCard";


const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* upcoming launch */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <LaunchCard/>
        </div>

        {/* previous launch */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <LaunchCard/>
        </div>

        {/* launch facilities */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <LaunchCard/>
        </div>

        {/* starlink card */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <LaunchCard/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
