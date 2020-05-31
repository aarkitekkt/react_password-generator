import React from "react";
import "./style.css";
import { Link } from 'react-scroll'


function Length(props) {
    return (
        <div className="length">
            <div id="lengthContent">
                <div className="d-flex justify-content-center">
                    <h1 id="lengthTitle">How long is your password?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <input id="lengthInput" placeholder="(8-128)" onChange={props.onChange} className="form-control bg-transparent my-2 border-0 text-center" />
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark">Nice</Link>
                </div>
            </div>
        </div>
    )
}

export default Length;