import React from "react";
import "./style.css";

function Length() {
    return (
        <div id="length">
            <div id="lengthContent">
                <div className="d-flex justify-content-center">
                    <h1 id="lengthTitle">How long is your password?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">Nice</button>
                </div>
            </div>
        </div>
    )
}

export default Length;