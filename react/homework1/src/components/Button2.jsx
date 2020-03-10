import React from 'react';
import PropTypes from 'prop-types';
const Button2 = ({text, backgroundColor, onClick}) => {
    return(
        <button
            className="btn-window"
            style = {{backgroundColor}}
            onClick = {onClick} >
            {text}</button>
        
    );
}
Button2.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string, 
    onClick: PropTypes.func
}
export default Button2;