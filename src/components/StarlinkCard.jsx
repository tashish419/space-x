const StarlinkCard = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-1">Starlink</h2>
      <div className="flex justify-center items-center">
        <img
          src="https://img.freepik.com/premium-photo/satellite-space_1134901-219278.jpg"
          alt="sattelite img"
          className=" w-52"
        />
      </div>
      <h3 className=" font-semibold m-1">There are currently 3268 active starlink satellites on low earth orbit</h3>
    </div>
  );
};

export default StarlinkCard;
