import { useDispatch } from "react-redux";
import { addUpcomingLaunch } from "../assets/launchSlice";
import { useEffect } from "react";

const useUpcomingLaunch = () => {
  const dispatch = useDispatch();

  const getUpcomingLaunch = async () => {
    const data = await fetch("https://api.spacexdata.com/v3/launches/upcoming");

    const json = await data.json();
    // console.log(json);

    dispatch(addUpcomingLaunch(json));
  };

  useEffect(() => {
    getUpcomingLaunch();
  }, []);
};

export default useUpcomingLaunch;
