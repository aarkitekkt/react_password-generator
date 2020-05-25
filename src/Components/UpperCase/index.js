import React from "react";
import "./style.css";

function UpperCase() {
    return (
        <div id="uppercase">
            <div id="uppercaseContent">
                <div className="d-flex justify-content-center">
                    <h1 id="uppercaseTitle">WHAT ABOUT UPPERCASE?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">TOTES</button>
                    <button className="btn btn-outline-dark">nope</button>
                </div>
            </div>
        </div>
    )
}

export default UpperCase;