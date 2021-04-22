import { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    }

    setActiveIndex = (index) => {
        this.setState({ activeOptionIdx: index });
    }

    makeOptionClassName = (index) => {
        const optionClasses = ['colorPicker__option']

        if(index === this.state.activeOptionIdx) {
            optionClasses.push('colorPicker__option-active ');
        }
        
        return optionClasses.join(' ');
    }

    render () {
         const activeOption = this.props.options[this.state.activeOptionIdx];

        return (
            <div className="colorPicker">
                <h2 className="colorPicker__title">Color Picker</h2>
                <p>Выбран цвет: {activeOption.label}; hex: {activeOption.color};</p>
                <div>
                    {this.props.options.map(({ label, color }, index) => {
                        const optionClassName = this.makeOptionClassName(index)

                        return <button 
                        type="button"
                        key={label} 
                        className={optionClassName} 
                        style={{ 
                            backgroundColor: color,}}
                        onClick={() => {
                            return this.setActiveIndex(index);
                        }}>
                        </button>
                    })}
                </div>
            </div>
        );
    }
}

// const ColorPicker = ({ options }) => {
//     return (
//         <div className={styles.colorPicker}>
//             <h2 className={styles.colorPicker__title}>Color Picker</h2>
//             <div>
//                 {options.map(({label, color }) => {
//                     return <span 
//                     key={label} 
//                     className={styles.colorPicker__option} 
//                     style={{ backgroundColor: color}}>
//                     </span>
//                 })}
//             </div>
//         </div>
//     );
// };

export default ColorPicker;
