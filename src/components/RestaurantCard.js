import {IMG_CDN_LINK} from '../../config'

const RestaurantCard = ({name, cuisines, deliveryTime, cloudinaryImageId}) => {
    return(
        <div className="card">
            <img src={ IMG_CDN_LINK + cloudinaryImageId} alt="restaurant img" />
            <div className='card-details'>
                <h4>{name}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{deliveryTime} mins</p>
            </div>

        </div>
    )
}

export default RestaurantCard;