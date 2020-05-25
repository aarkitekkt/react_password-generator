import React from "react";
import "./style.css";

function Password() {
    return (
        <div id="password">
            <div id="passwordContent">
                <div className="d-flex justify-content-center">
                    <h1 id="passwordTitle">Your Password Is...</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">copy that shit</button>
                    <button className="btn btn-outline-dark">start over</button>
                </div>
            </div>
        </div>
    )
}

export default Password;