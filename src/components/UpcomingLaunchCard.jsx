import { useEffect } from "react";

const UpcomingLaunchCard = () => {

  
  const getUpcomingLaunch = async () => {
      const data = await fetch("https://api.spacexdata.com/v3/launches/upcoming");

      const json = await data.json();
      console.log(json);

      const  {flight_number, rocket, mission_name} = json[0];
  }

  useEffect(()=>{
    getUpcomingLaunch()
  },[])

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Upcoming launch</h2>
      <div className="flex justify-normal">
        <div className=" w-1/2">
          <div>
            <h4 className=" text-xs font-thin text-gray-200">{mission_name}</h4>
            <p></p>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="w-1/2">
          <div></div>
          <div></div>
        </div>
      </div>
      <p>Mission Name: USSF-44</p>
      <p>Rocket: Falcon Heavy</p>
      <p>Flight Number: 188</p>
      <p>Time (UTC): Nov 01, 01:41 PM</p>
      <p>Launchpad: KSC LC 39A</p>
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          W
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Y
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          R
        </a>
      </div>
    </>
  );
};

export default UpcomingLaunchCard;
