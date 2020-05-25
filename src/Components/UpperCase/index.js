import React from "react";
import "./style.css";
import { Link } from 'react-scroll'

function UpperCase(props) {
    return (
        <div className="uppercase">
            <div id="uppercaseContent">
                <div className="d-flex justify-content-center">
                    <h1 id="uppercaseTitle">WHAT ABOUT UPPERCASE?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark">Yes</Link>
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark">No</Link>
                </div>
            </div>
        </div>
    )
}

export default UpperCase;