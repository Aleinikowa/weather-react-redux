import React from "react";

const Content = ({ id, title, weatherDescription }) => {

    return (
        <div key={id}>
            <h1>{title}</h1>
            <p>{weatherDescription}</p>
        </div>
    )
}

export default Content;