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
                        <h1>{restaurantDetail?.name}</h1>
                        <h5>{restaurantDetail?.costForTwoMsg}</h5>
                        <h5>{restaurantDetail?.area}</h5>
                        <div className="">
                            {/* <ul> */}
                                {Object.values(restaurantDetail?.menu?.items).map((item) => (
                                    // <li key={item.id}>{item.name}</li>
                                    <FoodCard {...item} key={item.id} />
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