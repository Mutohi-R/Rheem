import { useEffect, useState } from "react";
import "./visitorcount.scss";

const VisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // check if the count has been incremented in this session
        const hasIncremented = sessionStorage.getItem("hasIncremented");
        if (!hasIncremented) {
            // Get the current count from local storage or initialize it to 0
            let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
            // Increment the count
            visitCount++;
            // update the count in local storage
            localStorage.setItem("visitCount", visitCount);
            // update the state
            setVisitorCount(visitCount);
            // mark that the count has been incremented in this session
            sessionStorage.setItem("hasIncremented", true);            
        } else {
            // if the count has been incremented in this session, get the count from local storage
            setVisitorCount(parseInt(localStorage.getItem("visitCount")) || 0);
        }
    }, []);

    return (
        <div className="visitor-count">
            <p>Visitors: {visitorCount}</p>
        </div>
    );
};

export default VisitorCount;
