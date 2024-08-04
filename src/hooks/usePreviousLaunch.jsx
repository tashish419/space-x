import { useDispatch } from "react-redux";
import { addPreviousLaunch } from "../assets/launchSlice";
import { useEffect } from "react";

const usePreviousLaunch = () => {
    const dispatch = useDispatch();

  const getPreviousLaunch = async () => {
    const data = await fetch("https://api.spacexdata.com/v3/launches/past");

    const json = await data.json();
    // console.log(json);
    console.log(data);

    dispatch(addPreviousLaunch(json));
  };

  useEffect(() => {
    getPreviousLaunch();
  }, []);
};

export default usePreviousLaunch;