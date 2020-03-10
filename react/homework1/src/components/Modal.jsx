import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";
export const Modal = ({header, closeIcon, actions, text, close}) => {
return (
    <div style = {{color: "white"}} className = "modal">
        <header className = "headpart">
            {/* {header} */}
            <p className = "header-text">{header}</p>
            {closeIcon && <button onClick ={close} className = "close-btn"><AiOutlineClose/></button>}
            
        </header>
        <p className = "modal-text">{text}</p>
        {actions}
    </div>
)
}
export default Modal;