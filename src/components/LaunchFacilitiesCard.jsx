import { useState } from "react";

const LaunchFacilitiesCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-h-72 overflow-y-scroll scrollbar">
      <h2 className="text-xl font-bold mb-2">Launch facilities</h2>
      <div className="mb-2 relative">
        <img
          src="https://live.staticflickr.com/65535/50137510881_3f675bb620_h.jpg"
          alt="Cape Canaveral"
          className="w-full h-24 object-cover rounded-lg"
        />
        <div className="absolute inset-0  flex flex-col justify-center px-2">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-semibold">Cape Canaveral</h3>
              <h4 className=" text-xs font-thin text-gray-200">
                LC-39A & SLC-40
              </h4>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">REGION</h4>
              <h3 className="text-white text-sm font-semibold">Florida</h3>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h4 className=" text-xs font-thin text-gray-200">TEMP</h4>
              <h3 className="text-white text-sm font-semibold">27°C</h3>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">WEATHER</h4>
              <h3 className="text-white text-sm font-semibold">RAIN</h3>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">WIND</h4>
              <h3 className="text-white text-sm font-semibold">7 m/s</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 relative">
        <img
          src="https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg"
          alt="Starbase Boca Chica"
          className="w-full h-24 object-cover rounded-lg"
        />
        <div className="absolute inset-0  flex flex-col justify-center p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-semibold">Starbase Boca Chica</h3>
              <h4 className=" text-xs font-thin text-gray-200">
                Starship Launch Facility
              </h4>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">REGION</h4>
              <h3 className="text-white text-sm font-semibold">Texas</h3>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h4 className=" text-xs font-thin text-gray-200">TEMP</h4>
              <h3 className="text-white text-sm font-semibold">27°C</h3>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">WEATHER</h4>
              <h3 className="text-white text-sm font-semibold">RAIN</h3>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">WIND</h4>
              <h3 className="text-white text-sm font-semibold">7 m/s</h3>
            </div>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="mb-2 relative">
          <img
            src="https://live.staticflickr.com/982/42290930181_480260c49b_k.jpg"
            alt="Vandenberg Base"
            className="w-full h-24 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-semibold">Vandenerg Base</h3>
              <h4 className=" text-xs font-thin text-gray-200">
              USSF SLC-4E
              </h4>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">REGION</h4>
              <h3 className="text-white text-sm font-semibold">California</h3>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h4 className=" text-xs font-thin text-gray-200">TEMP</h4>
              <h3 className="text-white text-sm font-semibold">27°C</h3>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">WEATHER</h4>
              <h3 className="text-white text-sm font-semibold">FOG</h3>
            </div>
            <div>
              <h4 className=" text-xs font-thin text-gray-200">WIND</h4>
              <h3 className="text-white text-sm font-semibold">0 m/s</h3>
            </div>
          </div>
          </div>
        </div>
      )}
      <button
        onClick={toggleExpanded}
        className=" text-white font-semibold"
      >
        {isExpanded ? "less" : "more"}
      </button>
    </div>
  );
};

export default LaunchFacilitiesCard;
