import { Component } from "react";
import styles from './DropDown.module.css';


class Dropdown extends Component {
    state = {
        visible: false,
    };

    // Используется предыдущие значение state.visible
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    }

    // Перезаписывается текущие значение state.visible
    // show = () => {
    //     this.setState({ visible: true });
    // }
    // hide = () => {
    //     this.setState({ visible: false });
    // }

    render() {
        return (
            <div className={styles.dropdown}>
                <button 
                    type="button" 
                    className ={styles.dropdown__toggle} 
                    onClick={this.toggle}>
                    {this.state.visible ? 'Скрыть': 'Показать'}
                </button>
                
                {/* <button type="button" className ={styles.dropdown__toggle} onClick={this.show}>Показать</button> */}
                {/* <button type="button" className ={styles.dropdown__toggle} onClick={this.hide}>Скрыть</button> */}

                {this.state.visible && (<div className={styles.dropdown__menu}>Типо меню</div>)}
            </div>
        );
    };
};

export default Dropdown;