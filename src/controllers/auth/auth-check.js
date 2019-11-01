import React, {Component} from 'react';
import {fetchUser} from '../../auth/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export default ComposedComponent => {
    class AuthCheck extends Component {
        componentWillMount() {
            if (this.props.auth === null) {
                this.props.history.push('/login');
            }
        }
        componentWillUpdate(nextProps) {
            if (nextProps.auth === null) {
                this.props.history.push('/login');
            }
        }
        render() {
            if (this.props.auth) {
                return <ComposedComponent {...this.props} />;
            }
            return null;
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth
    });

    return withRouter(connect(mapStateToProps, {fetchUser})(AuthCheck));
};

