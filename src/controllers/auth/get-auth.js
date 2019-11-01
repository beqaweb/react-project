import React, {Component} from 'react';
import {connect} from 'react-redux';

export default ComposedComponent => {
    class GetAuth extends Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth
    });

    return connect(mapStateToProps)(GetAuth);
};

