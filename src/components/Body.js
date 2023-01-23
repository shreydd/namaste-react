import RestaurantCard from "/src/components/RestaurantCard";
import { RestaurantsData } from "../../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// function to filter through all the restaurants 
const filterData = (searchText, restaurants) => {
    let filtered = [];

    // if search text is null or has only white spaces then show all
    if (searchText.match(/^\s*$/) !== null) {
        filtered = restaurants;
        return filtered;
    } else {
        filtered = restaurants.filter((res) => {
            let restaurantName = res?.data?.name
            restaurantName = restaurantName.toLowerCase()
            // trim whitespaces and lowercase the search text
            return restaurantName.includes(searchText.trim().toLowerCase())
        })
    }

    return filtered;
}


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState();
    const [restaurantsAvailable, setRestaurantsAvailable] = useState();
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        getRestaurants()
    }, []);


    const getRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063&lng=77.5857&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setRestaurantsAvailable(json?.data?.cards[2]?.data?.data?.cards);
    }

    // when loading show shimmer ui else show full restaurants ui
    return !allRestaurants ? <Shimmer /> : (
        <>
            <div className="search-toolbar">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search"
                    value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        // filter data
                        const data = filterData(searchText, allRestaurants);
                        // update state
                        setRestaurantsAvailable(data);
                    }}
                >Search</button>
            </div>

            {searchText?.length > 0 && restaurantsAvailable?.length === 0
                ? <p className="center-text">No restaurants available</p>
                : <main className="grid-list">
                    {
                        restaurantsAvailable.map((res) => {
                            // return console.log({...res.data.cuisines})
                            return <RestaurantCard key={res?.data?.id} {...res?.data} />
                        })
                    }
                </main>
            }
        </>
    )
}

export default Body;