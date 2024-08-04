import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useUpcomingLaunch = () => {
  const dispatch = useDispatch();

  const getUpcomingLaunch = async () => {
    const data = await fetch("https://api.spacexdata.com/v3/launches/upcoming");

    const json = await data.json();
    console.log(json);

    dispatch(json[0]);
  };

  useEffect(() => {
    getUpcomingLaunch();
  }, []);
};

export default useUpcomingLaunch;
