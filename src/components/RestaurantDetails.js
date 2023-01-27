import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "../../config";
import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {

    const ParamRestaurantId = useParams();
    const { id } = ParamRestaurantId;

    const [restaurantDetail, setRestaurantDetail] = useState(null);

    const getRestaurantDetails = async () => {
        const data = await fetch(SWIGGY_MENU_API + id);
        const json = await data.json();
        console.log(json?.data);
        setRestaurantDetail(json?.data);
    }

    useEffect(() => {
        getRestaurantDetails()
    }, [])

    return (
        <>
            {
                !restaurantDetail ? <Shimmer /> : (
                    <div>
                        <h1>{restaurantDetail?.name}</h1>
                        <h5>{restaurantDetail?.costForTwoMsg}</h5>
                        <h5>{restaurantDetail?.area}</h5>
                        <div className="">
                            {/* <ul> */}
                                {Object.values(restaurantDetail?.menu?.items).map((item) => (
                                    // <li key={item.id}>{item.name}</li>
                                    <FoodCard {...item} />
                                ))}
                            {/* </ul> */}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default RestaurantDetails;