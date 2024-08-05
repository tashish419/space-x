import { useDispatch } from "react-redux";
import { addUpcomingLaunch } from "../assets/launchSlice";
import { useEffect } from "react";
import { UPCOMING_LAUNCH_API } from "../constants";

const useUpcomingLaunch = () => {
  const dispatch = useDispatch();

  const getUpcomingLaunch = async () => {
    const data = await fetch({UPCOMING_LAUNCH_API});

    const json = await data.json();

    dispatch(addUpcomingLaunch(json));
  };

  useEffect(() => {
    getUpcomingLaunch();
  }, []);
};

export default useUpcomingLaunch;
