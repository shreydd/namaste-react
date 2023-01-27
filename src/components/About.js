import { Outlet } from "react-router-dom";
import Credits from "./Credits";
import ProfileClass from "./ProfileClassComp";

const About = () => {
    return(
        <>
            <h1>About us</h1>
            <p>A mock swiggy web app using their live API for the data</p>
            <Outlet/>
            <ProfileClass name="Shreyas" />
            <Credits resApiFrom="swiggy" />
        </>
    )
}

export default About;