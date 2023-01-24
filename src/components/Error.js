import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <>
            <h1>OH NO!</h1>
            <p>Looks like you are lost</p>
            <p>{err.status + " : " + err.statusText}</p>
        </>
    )
}

export default Error;