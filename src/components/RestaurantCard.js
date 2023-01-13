import {IMG_CDN_LINK} from '../../config'

const RestaurantCard = ({name, cuisines, deliveryTime, cloudinaryImageId}) => {
    return(
        <div className="card">
            <img src={ IMG_CDN_LINK + cloudinaryImageId} alt="restaurant img" />
            <h4>{name}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{deliveryTime} mins</p>

        </div>
    )
}

export default RestaurantCard;