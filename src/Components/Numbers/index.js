import React from "react";
import "./style.css";
import { Link } from 'react-scroll'

function Numbers(props) {
    return (
        <div className="numbers">
            <div id="numbersContent">
                <div className="d-flex justify-content-center">
                    <h1 id="numbersTitle">You good with numbers?</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark" onClick={props.clickYes}>Yes</Link>
                    <Link to={props.to} smooth={true} duration={500} className="btn btn-outline-dark" onClick={props.clickNo}>No</Link>
                </div>
            </div>
        </div>
    )
}

export default Numbers;