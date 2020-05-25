import React from "react";
import "./style.css";

function Numbers() {
    return (
        <div id="numbers">
            <div id="numbersContent">
                <div className="d-flex justify-content-center">
                    <h1 id="numbersTitle">You good with numbers?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">yes</button>
                    <button className="btn btn-outline-dark">no</button>
                </div>
            </div>
        </div>
    )
}

export default Numbers;