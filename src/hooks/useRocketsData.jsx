import { useDispatch } from "react-redux";
import { addRockets } from "../assets/rocketsSlice";
import { useEffect } from "react";

const useRocketsData = () => {
  const dispatch = useDispatch();

  const getRocktesData = async () => {
    const data = await fetch("https://api.spacexdata.com/v4/rockets");
    const json = await data.json();
    
    dispatch(addRockets(json));
  }

  useEffect(() => {
    getRocktesData();
  },[]);
}

export default useRocketsData;
