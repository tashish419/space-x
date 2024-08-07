import { useState } from "react";
import bgImg from "../assets/img/bg1.jpg";
import useRocketsData from "../hooks/useRocketsData";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Rockets = () => {
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [showPhotos, setShowPhotos] = useState(false);
  const rocketsData = useSelector((store) => store?.rockets?.rockets);

  const openModal = (rocket) => {
    setSelectedRocket(rocket);
    setShowPhotos(false);
  };

  const closeModal = () => {
    setSelectedRocket(null);
    setShowPhotos(false);
  };

  const allImages = rocketsData.reduce((acc, element) => {
    return acc.concat(element?.flickr_images);
  }, []);

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
          {rocketsData.map((rocket, index) => (
            <div key={rocket?.id} onClick={() => openModal(rocket)}>
              <h2 className="text-white font-semibold text-lg mb-2">
                {rocket.name}
              </h2>
              <div className="relative h-72 overflow-hidden rounded-lg">
                <img
                  src={rocket.flickr_images[0]}
                  alt={`rocket-img-${index}`}
                  loading="lazy"
                  className="rounded-lg h-full object-cover shadow-lg transition-transform duration-300 hover:scale-110"
                />
                <div
                  className={`p-1 absolute z-10 bottom-2 left-2 rounded-lg ${
                    rocket.active ? "bg-green-600" : "bg-yellow-600"
                  } bg-opacity-70 flex flex-col justify-start items-start my-1`}
                >
                  <h4 className="text-xs font-semibold text-gray-400">
                    STATUS
                  </h4>
                  <p className="text-sm font-bold text-white">
                    {rocket?.active ? "Active" : "In development"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedRocket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 shadow-lg">
          <div className="bg-white rounded-lg px-10 py-8 max-w-4xl  w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 text-2xl"
            >
              &times;
            </button>
            <div className="flex mb-4 gap-4">
              <h2 className="text-black font-bold text-2xl">
                {selectedRocket.name}
              </h2>
              <h2
                className={`text-black font-semibold text-2xl hover:bg-zinc-100 hover:rounded-lg hover:px-1 hover:cursor-pointer ${
                  showPhotos ? "text-gray-400" : ""
                }`}
                onClick={() => setShowPhotos(false)}
              >
                Overview
              </h2>
              <h2
                className={`text-black font-semibold text-2xl hover:bg-zinc-100 hover:rounded-lg hover:px-1 hover:cursor-pointer ${
                  showPhotos ? "" : "text-gray-400"
                }`}
                onClick={() => setShowPhotos(true)}
              >
                Photos
              </h2>
            </div>
            {showPhotos ? (
              <div className="shadow-xl bg-white mx-auto">
                <Swiper spaceBetween={30} slidesPerView={2}>
                  {allImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`slide-${idx}`}
                        className="rounded-lg object-cover w-[100%] h-[100%]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="flex gap-4">
                <img
                  src={selectedRocket.flickr_images[0]}
                  alt="rocket-img-detail"
                  className="rounded-lg h-72 w-1/3 object-cover shadow-lg"
                />
                <div className="shadow-xl bg-white p-4">
                  <h4 className="text-gray-700 font-semibold mb-2">
                    DESCRIPTION
                  </h4>
                  <p className="text-gray-600">{selectedRocket.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Rockets;
