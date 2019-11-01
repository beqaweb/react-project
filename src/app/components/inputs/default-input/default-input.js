import React, {Component, Fragment} from 'react';
import './styles.styl';
import PropTypes from 'prop-types';

class DefaultInput extends Component {
    textAreaAdjust = el => {
        el.target.style.height = '1px';
        el.target.style.height = (25 + el.target.scrollHeight) + 'px';
    };

    render() {
        const {className, multiple, ...props} = this.props;
        return (
            <Fragment>
                {
                    multiple ?
                        <textarea
                            onKeyUp={this.textAreaAdjust}
                            className={`default-textarea ${className}`}
                            {...props}
                        />
                        :
                        <input
                            className={`default-input ${className}`}
                            {...props}
                        />
                }
            </Fragment>
        );
    }
}

DefaultInput.propTypes = {
    className: PropTypes.string,
    multiple: PropTypes.bool
};

export default DefaultInput;
