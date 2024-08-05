import { useDispatch } from "react-redux";
import { addPreviousLaunch } from "../assets/launchSlice";
import { useEffect } from "react";
import { PAST_LAUNCH_API } from "../constants";

const usePreviousLaunch = () => {
    const dispatch = useDispatch();

  const getPreviousLaunch = async () => {
    const data = await fetch({PAST_LAUNCH_API});

    const json = await data.json();

    dispatch(addPreviousLaunch(json));
  };

  useEffect(() => {
    getPreviousLaunch();
  }, []);
};

export default usePreviousLaunch;