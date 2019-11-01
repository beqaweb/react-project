import React, {Component} from 'react';
import './styles.styl';
import Icon from '../../icon';
import PropTypes from 'prop-types';

class AddButton extends Component {
    render() {
        const {className, ...props} = this.props;
        return (
            <button
                className={`add-button ${className}`}
                {...props}
            >
                <Icon icon="add"/>
            </button>
        );
    }
}

AddButton.propTupes = {
    className: PropTypes.string
};

export default AddButton;
