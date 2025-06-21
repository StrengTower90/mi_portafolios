import React from "react";
import "./DotLoader.css";

 const DotLoader = ({ size = 12, bg = "#ffff"}) => {

    const styles = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${bg}`
    }

    return (    
        <div className="dot-loader">
            <span style={styles}></span>
            <span style={styles}></span>
            <span style={styles}></span>
        </div>
    )
 };


 export default DotLoader;
