import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useFetchRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchRestaurantsMenuData()
    },[])

    fetchRestaurantsMenuData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        const fetchRestaurantsMenuData = json.data;
        setResInfo(fetchRestaurantsMenuData);
    }

    return resInfo;
}

export default useFetchRestaurentMenu;