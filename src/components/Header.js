import Logo from "/assets/images/Meshi.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";
import UserContext from "../hooks/UserContext";
import { useContext } from "react";

const Header = () => {

    const {user} = useContext(UserContext);

    const isOnline = useIsOnline()

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <nav className="navbar">
            <a href="/">
                <img src={Logo} className="logo" alt="Logo" />
            </a>
            <ul className="nav-lists">
                <p> <Link to="/">Home</Link> </p>
                <p> <Link to="/about">About</Link> </p>
                <p> <Link to="/contact">Contact</Link> </p>
                
                <p>Cart</p>

                <p> {user.name + " - " + user.email} { isOnline ? "✅": "🛑" } </p>

                {
                    isLoggedIn ? (
                        <button className="primary-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                        <Link to="/login">
                            {/* add this func below after implementing proper login func onClick={() => setIsLoggedIn(true)} */}
                            <button className="primary-btn">Login</button>
                        </Link>
                    )
                }
            </ul>
        </nav>
    )
}

export default Header;