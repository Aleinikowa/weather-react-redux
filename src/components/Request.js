import React from 'react';
import { connect } from "react-redux";
import Content from "./Request-content";

function Request ({requests}) {

    const content = requests.map((request) =>
        <div key={request.id}>
            <Content id={request.id} title={request.name} weatherDescription={request.description} />
        </div>
    )

    return (
        <div>
            {content}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        requests: state.isDataWeather
    }
}

export default connect(mapStateToProps)(Request);

