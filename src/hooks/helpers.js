export const filterData = (searchText, restaurants) => {
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
};