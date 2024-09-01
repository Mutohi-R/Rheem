import { useState, useEffect } from "react";
import './location.scss';

const Location = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [location, setLocation] = useState("Getting your location...");

    const locationSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(
            `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
        );
    };

    const locationError = () => {
        setLocation("Unable to retrieve your location");
    };

    // Update the time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                locationSuccess,
                locationError
            );
        } else {
            setLocation("Geolocation is not supported by your browser");
        }

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="ticker-container">
            <div className="ticker-content">
                <p>{`Date: ${dateTime.toLocaleDateString()} | Time: ${dateTime.toLocaleTimeString()} | Location: ${location}`}</p>
            </div>
        </div>
    );
};

export default Location;
