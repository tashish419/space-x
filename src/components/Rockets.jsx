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
    <div className="flex-1 justify-center items-center bg-gradient-to-r shadow-lg from-gray-700 via-gray-900 to-black relative rounded-r-lg">
      <img
        src={bgImg}
        alt="Bg-img"
        className="absolute inset-0 w-full h-full object-cover rounded-r-lg"
      />
      <div className="rounded-[15px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.6)] relative z-20 p-4 w-[820px] mx-auto">
        <div className="flex justify-evenly">
          <div>
            <h2>{rocketsData[0]?.rocket_name}</h2>
            <img src={rocketImg1} alt="rocket-img-1" loading="lazy" />
          </div>
          <div>
            <h2>{rocketsData[1]?.rocket_name}</h2>
            <img src={rocketImg2} alt="rocket-img-2" loading="lazy" />
          </div>
          <div>
            <h2>{rocketsData[2]?.rocket_name}</h2>
            <img src={rocketImg3} alt="rocket-img-3" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
