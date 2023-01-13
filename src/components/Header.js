import Logo from "/assets/images/Meshi.svg";

const Header = () => {
    return(
        <nav className="navbar">
            <a href="/">
                <img src={Logo} className="logo" alt="Logo" />
            </a>
            <ul className="nav-lists">
                <p>Top Dishes</p>
                <p>Offers</p>
                <p>Restaurants</p>
                <p>Cart</p>
            </ul>
        </nav>
    )
}

export default Header;