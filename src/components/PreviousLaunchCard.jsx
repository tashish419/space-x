import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePreviousLaunch from "../hooks/usePreviousLaunch";
import {launchLogoImg} from "../assets/img/launchCardLogo.png";

const PreviousLaunchCard = () => {
  const previousLaunch = useSelector(
    (store) => store?.launch?.previousLaunch[0]
  );

  usePreviousLaunch();

  return (
    <>
      <h2 className="text-xl font-bold mb-2">Previous launch</h2>
      <div className="flex justify-normal">
        <div className=" w-1/2">
          <div className="mb-2">
            <h4 className=" text-xs font-thin text-gray-200">MISSION NAME</h4>
            <h3 className="text-sm font-semibold">
              {previousLaunch?.mission_name}
            </h3>
          </div>
          <div className="mb-2">
            <h4 className=" text-xs font-thin text-gray-200">ROCKET</h4>
            <h3 className="text-sm font-semibold">
              {previousLaunch?.rocket?.rocket_name}
            </h3>
          </div>
          <div className="mb-2">
            <h4 className=" text-xs font-thin text-gray-200">FLIGHT NUMBER</h4>
            <h3 className="text-sm font-semibold">
              {previousLaunch?.flight_number}
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
                src={launchLogoImg}
                alt="Rocket Logo"
              />
            </div>
          </div>
          <div className="mt-12">
            <h4 className=" text-xs font-thin text-gray-200">FLIGHT NUMBER</h4>
            <h3 className="text-sm font-semibold">
              {previousLaunch?.launch_site?.site_name}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousLaunchCard;
