import React from "react";

const validation = (props) => {
    if (props.textLength >= 5) {
        return <p>Text is long enough</p>
    }
    else {
        return <p>Text is too short</p>
    }
};

export default validation;