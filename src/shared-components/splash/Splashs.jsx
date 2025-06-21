import React from "react";
import DotLoader from "../loaders/dot-loader/DotLoader";
import "./Splashs.css";

const Splashs = () => {
    return (
        <div className="splash-container">
            <DotLoader size={15} />
        </div>
    )
};

export default Splashs;