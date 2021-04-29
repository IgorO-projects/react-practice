import { Component } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal_root');


export default class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
        console.log('componentDidMount');
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
        console.log('componentWillUnmount');
    }

    handleKeyDown = event => {
        if(event.code === 'Escape') {
            this.props.toggleModal();
        }
    }
    handleBackdrop = event => {
        if(event.target ===event.currentTarget) {
            this.props.toggleModal()
        }
    }

    render() {
        return createPortal(
            <div 
            className={styles.modal__backdrop}
            onClick={this.handleBackdrop}>
                <div className={styles.modal__content}>
                    {this.props.children}
                </div>
            </div>
        , modalRoot);
    };
};