import React, {Component} from 'react';
import './styles.styl';
import Logo from './Logo.svg';
import NavList from '../nav-list/nav-list';
import NavListItem from '../nav-list-item/nav-list-item';
import {withRouter} from 'react-router-dom';
import UnreadMails from '../../../controllers/unread-mails';

class AppSidebar extends Component {
    render() {
        const {unreadMails} = this.props;
        return (
            <div className="app-sidebar">
                <div className="wrap-logo">
                    <img className="wrap-logo__img" src={Logo} alt="logo"/>
                </div>
                <NavList>
                    <NavListItem
                        to="/inbox"
                        text="Inbox"
                        badge={unreadMails.inbox}
                        icon="move_to_inbox"
                    />
                    <NavListItem
                        to="/sent"
                        text="Sent"
                        icon="send"
                    />
                    <NavListItem
                        to="/spam"
                        text="Spam"
                        badge={unreadMails.spam}
                        icon="report"
                    />
                    <NavListItem
                        to="/trash"
                        text="Trash"
                        icon="delete"
                        badge={unreadMails.trash}
                    />
                </NavList>
            </div>
        );
    }
}

export default withRouter(UnreadMails(AppSidebar));
