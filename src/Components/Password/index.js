import React from "react";
import "./style.css";
import { Link } from 'react-scroll'

function Password(props) {
    return (
        <div className="password">
            <div id="passwordContent">
                <div className="d-flex justify-content-center">
                    <h1 id="passwordTitle">Your Password Is...</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">copy</button>
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark">Start Over</Link>
                </div>
            </div>
        </div>
    )
}

export default Password;