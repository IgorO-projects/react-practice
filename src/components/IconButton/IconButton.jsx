import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

const IconButton =({ children, onClick, ...allProps }) => {
    return (
        <button 
        className={styles.button}
        type="button"
        onClick={onClick}
        {...allProps}>
            {children}
        </button>
    );
};

IconButton.defaultProps = {
    onClick: () => null,
    children: null
}

IconButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    'aria-label': PropTypes.string.isRequired,
}

export default IconButton;