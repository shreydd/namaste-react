const FoodCard = ({name, id}) => {
    return(
        <div key={id}>
            - {name}
        </div>
    )
}

export default FoodCard;