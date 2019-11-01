import React, {Component} from 'react';
import '../styles.styl';
import GoogleButton from 'react-google-button';
import {connect} from 'react-redux';
import {signIn} from '../../../auth/actions';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    componentWillMount() {
        if (this.props.auth) {
            this.props.history.push('/');
        }
    }


    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.props.history.push('/inbox');
        }
    }


    render() {
        if (this.props.auth === null) {
            return (
                <div className="login-page">
                    <GoogleButton onClick={this.props.signIn}/>
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {signIn})(withRouter(Login));
