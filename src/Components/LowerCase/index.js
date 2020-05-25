import React from "react";
import "./style.css";
import { Link } from 'react-scroll'

function LowerCase(props) {
    return (
        <div className="lowercase">
            <div id="lowercaseContent">
                <div className="d-flex justify-content-center">
                    <h1 id="lowercaseTitle">Want lowercase letters?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark">Yes</Link>
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark">No</Link>
                </div>
            </div>
        </div>
    )
}

export default LowerCase;