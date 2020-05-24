import React from "react";
import "./style.css";

function Landing() {
    return (
        <div id="landing">
            <div id="landingContent">
                <div className="d-flex justify-content-center">
                    <h1 id="landingTitle">Password Generator</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">Begin</button>
                    <button className="btn btn-outline-dark">Nah</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;