import React from "react";
import "./Char.css"

const char = (props) => {
    const result = props.appInput.split('').map((letter, index) => {
        return (
            <div className="box" onClick={props.click} key={index}>
                {letter}
            </div>
        )
    });

    return (
        <div>
            {result}
        </div>
    )
};

export default char;