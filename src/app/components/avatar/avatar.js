import React, {Component} from 'react';
import './styles.styl';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Avatar extends Component {
    render() {
        const {size, auth} = this.props;
        const imgSize = size ? size : 50;

        return (
            <div
                style={{height: imgSize, width: imgSize}}
                className="avatar"
            >
                <img
                    src={auth.photoURL}
                    className="avatar__img"
                    alt="avatar"
                />
            </div>
        );
    }
}

Avatar.propTypes = {
    size: PropTypes.number,
    src: PropTypes.string
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Avatar);
