import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constant";

const useFetchRestaurents = () => {
    const [restaurentList, setRestaurentList] = useState("")

    useEffect(() => {
        fetchRestaurentsListData();
    }, [])

    const fetchRestaurentsListData = async () => {
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        const restaurants =
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];
        setRestaurentList(restaurants)
    }

    return restaurentList;
}

export default useFetchRestaurents;