import React from "react";
import "./SpinningCircle.css";

const SpinningCircle = ({ size = 40, color = "#3c9a8979" }) => {
    const styles = {
        width: `${size}px`,
        height: `${size}px`,
        border: `4px solid rgba(0, 0, 0, 0.1)`,
        borderTopColor: `${color}`
    };

    return (
        <div 
            className="spinner"
            style={styles}
        ></div>
    )
};

export default SpinningCircle;