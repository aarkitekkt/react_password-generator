import React from "react";
import "./style.css";
import { Link } from 'react-scroll'


function Landing(props) {
    return (
        <div id="landing">

            <div id="landingContent">
                <div id="animationContainer" className="mx-auto mt-0 p-0">
                    <h1 id="landingBackground">*******</h1>
                </div>
                <div className="d-flex justify-content-center">

                    <h1 id="landingTitle" className="text-center mb-5">Password Generator</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={props.to} smooth={true} duration={500} id="beginButton" className="btn">Begin</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;