import React, {Component} from 'react';
import {fetchUnreadMails} from './services/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export default ComposedComponent => {
    class UnreadMails extends Component {
        componentDidMount() {
            this.props.fetchUnreadMails();
        }
        render() {
            return <ComposedComponent unreadMails={this.props.unreadMails} />;
        }
    }

    const mapStateToProps = state => ({
        unreadMails: state.unreadMails
    });

    return withRouter(connect(mapStateToProps, {fetchUnreadMails})(UnreadMails));
};

