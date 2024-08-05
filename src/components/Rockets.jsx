import bgImg from "../assets/img/bg1.jpg";
import useRocketsData from "../hooks/useRocketsData";
import { useSelector } from "react-redux";
import rocketImg1 from "../assets/img/rocket1.jpg";
import rocketImg2 from "../assets/img/rocket2.jpg";
import rocketImg3 from "../assets/img/rocket3.jpg";

const Rockets = () => {
  const rocketsData = useSelector((store) => store?.rockets?.rockets);
  console.log(rocketsData);
  useRocketsData();
  return (
    <div className="flex items-center justify-center  bg-gradient-to-r from-gray-700 via-gray-900 to-black relative rounded-r-lg scrollbar">
      <img
        src={bgImg}
        alt="Bg-img"
        className="absolute inset-0 w-full h-full object-cover rounded-r-lg"
      />
      <div className="rounded-[15px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)] relative z-20 p-6  w-[820px] mx-14 ">
        <div className="flex justify-around gap-4 ">
          <div>
            <h2 className="text-white font-semibold text-lg mb-2">
              {rocketsData[0]?.rocket_name}
            </h2>
            <div className="relative h-72">
              <img
                src={rocketImg1}
                alt="rocket-img-1"
                loading="lazy"
                className="rounded-lg h-full object-cover shadow-lg"
              />
              <div className="p-1 absolute z-10 bottom-2 left-2 rounded-lg bg-yellow-600 bg-opacity-70 flex flex-col justify-start items-start my-1">
                <h4 className="text-xs font-semibold text-gray-400">STATUS</h4>
                <p className="text-sm font-bold text-white">{rocketsData[0]?.active ? "Active" : "In development"}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-2">
              {rocketsData[1]?.rocket_name}
            </h2>
            <div className="relative h-72">
              <img
                src={rocketImg2}
                alt="rocket-img-2"
                loading="lazy"
                className="rounded-lg h-full object-cover shadow-lg"
              />
              <div className="p-1 absolute z-10 bottom-2 left-2 rounded-lg bg-green-600 bg-opacity-70 flex flex-col justify-start items-start my-1">
                <h4 className="text-xs font-semibold text-gray-400">STATUS</h4>
                <p className="text-sm font-bold text-white">{rocketsData[1]?.active ? "Active" : "In development"}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mb-2">
              {rocketsData[2]?.rocket_name}
            </h2>
            <div className="relative h-72">
              <img
                src={rocketImg3}
                alt="rocket-img-3"
                loading="lazy"
                className="rounded-lg h-full object-cover shadow-lg"
              />
              <div className="p-1 absolute z-10 bottom-2 left-2 rounded-lg bg-green-600 bg-opacity-70 flex flex-col justify-start items-start my-1">
                <h4 className="text-xs font-semibold text-gray-400">STATUS</h4>
                <p className="text-sm font-bold text-white">{rocketsData[2]?.active ? "Active" : "In development"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
