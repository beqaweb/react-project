import React, {Component} from 'react';
import './styles.styl';
import PropTypes from 'prop-types';

class ModalButton extends Component {
    render() {
        const {className, theme, text, type, ...props} = this.props;
        return (
            <button
                className={`modal-btn modal-btn__${theme} ${className ? className : ''}`}
                type={type}
                {...props}
            >
                {text}
            </button>
        );
    }
}

ModalButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default ModalButton;
