import React from 'react';

const Button = (props) => (
    <button type='button' className={'btn ' + props.style} onClick={props.onClick}>
        {props.name}
    </button>
);

export default Button;