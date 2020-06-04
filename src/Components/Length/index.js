import React from "react";
import "./style.css";
import { Link } from 'react-scroll'


function Length(props) {
    return (
        <div className="length">
            <div id="lengthContent">
                <div className="d-flex justify-content-center">
                    <h1 id="lengthTitle" className="text-center mb-3">Password Length?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <input id="lengthInput" type="range" min="8" max="22" value={props.value} onChange={props.onChange} className="slider my-5" />
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <h1 id="lengthValue">{props.length}</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={props.to} smooth={true} duration={500} id="niceButton" className="btn" onClick={props.onClick}>Nice</Link>
                </div>
            </div>
        </div>
    )
}

export default Length;