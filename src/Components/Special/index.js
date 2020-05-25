import React from "react";
import "./style.css";

function Special() {
    return (
        <div id="special">
            <div id="specialContent">
                <div className="d-flex justify-content-center">
                    <h1 id="specialTitle">Special characters?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">ya$$</button>
                    <button className="btn btn-outline-dark">too fancy</button>
                </div>
            </div>
        </div>
    )
}

export default Special;