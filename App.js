import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/images/icons8-namaste-64.png";
import UserIcon from "./assets/images/icons8-name-64.png"


const Title  = (
	<h1> title </h1>
);

const TitleFunc = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Header = () => {
    return (
        <nav className="navbar">
            <img src={Logo} />
            <input type="text" placeholder="Search" className="search-bar"></input>
            <img src={UserIcon} />
        </nav>
    )
}

const MainComponent = () => {
	return (
		<div>
            <Header/>
            {Title}
			<TitleFunc title="hello devs"/>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent/>)