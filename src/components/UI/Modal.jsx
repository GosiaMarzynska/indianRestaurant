import React from 'react';
import {createPortal} from "react-dom";
import classes from "./Modal.module.css"

const Backdrop = props => {
    return <div onClick={props.closeModal} className={classes.backdrop}/>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};


// const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
            {createPortal(<Backdrop closeModal={props.closeModal}/>, document.body)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.body)}
        </>

    )

}

export default Modal;