import React from "react";
import "./style.css";

function LowerCase() {
    return (
        <div id="lowercase">
            <div id="lowercaseContent">
                <div className="d-flex justify-content-center">
                    <h1 id="lowercaseTitle">Want lowercase letters?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">yea</button>
                    <button className="btn btn-outline-dark">NAH</button>
                </div>
            </div>
        </div>
    )
}

export default LowerCase;