import { SWIGGY_MENU_API } from "../../config";
import { useEffect, useState } from "react";


const useRestaurantDetails = (id) => {
    const [restaurantDetail, setRestaurantDetail] = useState(null);

    useEffect(() => {
        getRestaurantDetails()
    }, [])

    const getRestaurantDetails = async () => {
        const data = await fetch(SWIGGY_MENU_API + id);
        const json = await data.json();
        console.log(json?.data);
        setRestaurantDetail(json?.data);
    }

    return restaurantDetail;
}

export default useRestaurantDetails;