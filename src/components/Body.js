import RestaurantCard from "/src/components/RestaurantCard";
import { RestaurantsData } from "../../config";
import { useState } from "react";

// function to filter through all the restaurants 
const filterData = (searchText, restaurants) => {
    let filtered = [];

    // if search text is null or has only white spaces then show all
    if (searchText.match(/^\s*$/) !== null) {
        filtered = restaurants;
        return filtered;
    } else {
        filtered = restaurants.filter((res) => {
            let restaurantName = res.data.data.name
            restaurantName = restaurantName.toLowerCase()
            // trim whitespaces and lowercase the search text
            return restaurantName.includes(searchText.trim().toLowerCase())
        })
    }

    return filtered;
}


const Body = () => {
    const allRestaurants = RestaurantsData[0]["cards"];
    const [restaurantsAvailable, setRestaurantsAvailable] = useState(allRestaurants);
    const [searchText, setSearchText] = useState("");

    return (
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

            <main className="restaurant-list">
                {
                    restaurantsAvailable.map((res) => {
                        return <RestaurantCard key={res.data.data.id} {...res.data.data} />
                    })
                }
            </main>
        </>
    )
}

export default Body;