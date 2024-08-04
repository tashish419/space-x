import { Link } from "react-router-dom";
// import useUpcomingLaunch from "../hooks/useUpcomingLaunch";
import useUpcomingLaunch from "../hooks/useUpcomingLaunch";
import { useSelector } from "react-redux";

const UpcomingLaunchCard = () => {
  const upcomingLaunch = useSelector(
    (store) => store?.launch?.upcomingLaunch[0]
  );

 

  useUpcomingLaunch();
  
  
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Upcoming launch</h2>
      <div className="flex justify-normal">
        <div className=" w-1/2">
          <div className="mb-2">
            <h4 className=" text-xs font-thin text-gray-200">MISSION NAME</h4>
            <h3 className="text-sm font-semibold">
              {upcomingLaunch?.mission_name}
            </h3>
          </div>
          <div className="mb-2">
            <h4 className=" text-xs font-thin text-gray-200">ROCKET</h4>
            <h3 className="text-sm font-semibold">
              {upcomingLaunch?.rocket?.rocket_name}
            </h3>
          </div>
          <div className="mb-2">
            <h4 className=" text-xs font-thin text-gray-200">FLIGHT NUMBER</h4>
            <h3 className="text-sm font-semibold">
              {upcomingLaunch?.flight_number}
            </h3>
          </div>
          <div className="mb-2">
            <h4 className=" text-xs font-thin text-gray-200">TIME(UTC)</h4>
            <h3 className="text-sm font-semibold">Nov 01, 01:41</h3>
          </div>
          <div>
            <h4 className=" text-xs font-thin text-gray-200">LINKS</h4>
            <div className="flex space-x-2">
              <Link to="#" className="text-gray-400 hover:text-white">
                W
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                Y
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                R
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <h4 className=" text-xs font-thin text-gray-200">TIME(UTC)</h4>
            <div className=" w-20 my-2">
              <img
                src="https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png"
                alt="Rocket Logo"
              />
            </div>
          </div>
          <div className="mt-12">
            <h4 className=" text-xs font-thin text-gray-200">FLIGHT NUMBER</h4>
            <h3 className="text-sm font-semibold">
              {upcomingLaunch?.launch_site?.site_name}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingLaunchCard;
