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
                                {Object.values(restaurantDetail?.cards[2]['groupedCard']['cardGroupMap']['REGULAR']['cards'][0]).map((item) => (
                                    <FoodCard {...item} key={item.id} />
                                ))}
                        </div> */}
                        {
                            [1, 2, 3, 4, 5].map(item => {
                                return (
                                    <FoodCard name={"food " + item + " from " + restaurantDetail?.cards[0]['card']['card']['info']['name']} key={item} />
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default RestaurantDetails;