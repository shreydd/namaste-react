import { useState, useEffect } from "react";

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(true);
        }

        const handleOffline = () => {
            setIsOnline(false)
        }

        window.addEventListener("online", () => handleOnline());
        window.addEventListener("offline", () => handleOffline());
        
        // after unmounting need to handle the event listeners
        return () => {
            window.removeEventListener("online", () => handleOnline());
            window.removeEventListener("offline", () => handleOffline());
        }

    }, [])

    return isOnline;
}

export default useIsOnline;