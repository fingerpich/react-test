import React from 'react';
// import { Link } from 'react-router-dom';

export default (props) => {
    if (!props.user) {
        return null
    }
    return <div>
        header
        {props.menu}
        {props.user}
    </div>
};
