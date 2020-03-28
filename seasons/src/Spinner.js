import React from 'react';

const Sipnner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

Sipnner.defaultProps = {
    message: 'Loading...'
};

export default Sipnner;