import React, {Component} from 'react';
import './styles.styl';
import PropTypes from 'prop-types';

class Icon extends Component {
    render() {
        const {icon, className, ...rest} = this.props;
        return (
            <i
                className={`material-icons ${className}`}
                {...rest}
            >
                {icon}
            </i>
        );
    }
}

Icon.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string
};

export default Icon;
