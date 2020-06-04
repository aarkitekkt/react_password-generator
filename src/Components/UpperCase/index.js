import React from "react";
import "./style.css";
import { Link } from 'react-scroll'

function UpperCase(props) {
    return (
        <div className="uppercase">
            <div id="backgroundContainer">
                ABCD
            </div>
            <div id="uppercaseContent">
                <div className="d-flex justify-content-center mb-5">
                    <h1 id="uppercaseTitle" className="text-center">Include uppercase letters?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link id={props.yesId} to={props.to} smooth={true} duration={500} className="btn btn-outline-dark mx-2" onClick={props.clickYes}>Yes</Link>
                    <Link id={props.noId} to={props.to} smooth={true} duration={500} className="btn btn-outline-dark mx-2" onClick={props.clickNo}>No</Link>
                </div>
            </div>
        </div>
    )
}

export default UpperCase;