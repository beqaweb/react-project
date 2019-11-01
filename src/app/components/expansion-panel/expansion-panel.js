import React, {Component} from 'react';
import './styles.styl';
import Icon from '../icon';
import PropTypes from 'prop-types';
import GetAuth from '../../../controllers/auth/get-auth';


class ExpansionPanel extends Component {
    state = {
        open: false
    };

    handleClickPanel = () => {
        this.setState({
            open: !this.state.open
        });
    };

    spamClick = el => {
        const {moveToSpam} = this.props;
        el.stopPropagation();
        if (moveToSpam) {
            moveToSpam();
        }
    };

    trashClick = el => {
        const {moveToTrash} = this.props;
        el.stopPropagation();
        if (moveToTrash) {
            moveToTrash();
        }
    };

    render() {
        const {open} = this.state;
        const {mail} = this.props;
        const isSend = mail.from === this.props.auth.email;
        return (
            <div
                role="presentation"
                onClick={this.props.onClick}
                className={`
                expansion-panel ${open ? 'opened' : ''}
                ${!mail.isRead && !isSend ? 'not-read' : ''}
                `}
            >
                <header
                    tabIndex={-1}
                    role="button"
                    className="expansion-panel__header"
                    onClick={this.handleClickPanel}
                >
                    <span className="expansion-panel__topic overfflow-ellipsis">{mail.subject}</span>
                    <span className="expansion-panel__last-message overfflow-ellipsis">{mail.message}</span>
                    {
                        !isSend ?
                            <div className="expansion-panel__buttons">
                                {
                                    !mail.types.spam && !mail.types.trash &&
                                    <button
                                        onClick={this.spamClick}
                                        className="expansion-panel__button"
                                    >
                                        <Icon icon="report"/>
                                    </button>
                                }
                                <button
                                    onClick={this.trashClick}
                                    className="expansion-panel__button"
                                >
                                    <Icon icon="delete"/>
                                </button>
                            </div>
                            : null
                    }
                </header>
                <div className="expansion-panel__expanded-content">
                    <div className="expansion-panel__mail-header">
                        {
                            isSend ?
                                <div className="expansion-panel__info-line">
                                    <span className="expansion-panel__info-type">To</span>
                                    <span className="expansion-panel__info-email">{mail.to}</span>
                                </div>
                                :
                                <div className="expansion-panel__info-line">
                                    <span className="expansion-panel__info-type">From</span>
                                    <span className="expansion-panel__info-email">{mail.from}</span>
                                </div>
                        }
                        <div className="expansion-panel__info-line">
                            <span className="expansion-panel__info-type">Cc</span>
                            <span className="expansion-panel__info-email">cc@email.me</span>
                        </div>
                        <div className="expansion-panel__info-line">
                            <span className="expansion-panel__info-type">Bcc</span>
                            <span className="expansion-panel__info-email">Bcc@email.me</span>
                        </div>
                    </div>
                    <div className="expansion-panel__expanded-message">
                        <p>{mail.message}</p>
                    </div>
                </div>
            </div>
        );
    }
}

ExpansionPanel.propTypes = {
    message: PropTypes.shape({
        message: PropTypes.string,
        isReade: PropTypes.bool,
        subject: PropTypes.string,
        from: PropTypes.string
    })
};

export default GetAuth(ExpansionPanel);
