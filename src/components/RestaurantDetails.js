import { useParams } from "react-router-dom";
import useRestaurantDetails from "../hooks/useRestaurantDetails";
import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {

    const ParamRestaurantId = useParams();
    const { id } = ParamRestaurantId;

    const restaurantDetail = useRestaurantDetails(id);

    return (
        <>
            {
                !restaurantDetail ? <Shimmer /> : (
                    <div>
                        <h1>{restaurantDetail?.cards[0]['card']['card']['info']['name']}</h1>
                        <h5>{restaurantDetail?.cards[0]['card']['card']['info']['costForTwoMessage']}</h5>
                        <h5>{restaurantDetail?.cards[0]['card']['card']['info']['areaName']}</h5>
                        {/* <div className="">
                                {Object.values(restaurantDetail?.menu?.items).map((item) => (
                                    <FoodCard {...item} key={item.id} />
                                ))}
                        </div> */}
                    </div>
                )
            }
        </>
    )
}

export default RestaurantDetails;