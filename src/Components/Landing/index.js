import React from "react";
import "./style.css";
import { Link } from 'react-scroll'


function Landing(props) {
    return (
        <div id="landing">
            <div id="landingContent">
                <div className="d-flex justify-content-center">
                    <h1 id="landingTitle">Password Generator</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark">Begin</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;