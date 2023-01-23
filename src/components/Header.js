import Logo from "/assets/images/Meshi.svg";
import { useState } from "react";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                {
                    isLoggedIn ? (
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                        <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    )
                }
            </ul>
        </nav>
    )
}

export default Header;