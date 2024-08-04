import bgImg from "../assets/img/bg1.jpg";

const Rockets = () => {
  return (
    <div className="flex-1 bg-gradient-to-r shadow-lg from-gray-700 via-gray-900 to-black text-white relative rounded-r-lg scrollbar">
      <img
        src={bgImg}
        alt="Bg-img"
        className="absolute inset-0 w-full h-full object-cover rounded-r-lg"
      />
      <h1>This is rocket section</h1>
    </div>
  );
}

export default Rockets;
