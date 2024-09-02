import { useEffect, useState, useRef } from "react";
import "./visitorcount.scss";

const VisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const hasIncremented = useRef(false);

    useEffect(() => {
        if (!hasIncremented.current) {
            // Get the current count from local storage or initialize it to 0
            let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
            // Increment the count
            visitCount++;
            // update the count in local storage
            localStorage.setItem("visitCount", visitCount);
            // update the state
            setVisitorCount(visitCount);
            // Set the flag to true so it doesn't increment again
            hasIncremented.current = true;
        }
    }, []);

    return (
        <div className="visitor-count">
            <p>Visitors: {visitorCount}</p>
        </div>
    );
};

export default VisitorCount;
