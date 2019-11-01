import React, {Component} from 'react';
import '../styles.styl';
import ExpansionPanel from '../../../app/components/expansion-panel';
import ExpansionPanelList from '../../../app/components/expansion-panel-list';
import Modal from '../../../app/components/modal';
import {connect} from 'react-redux';
import {fetchSpamTrashMails, readInboxMail, deleteMailForever} from './services/actions';
import {PacmanLoader} from 'react-spinners';
import {groupByDate} from '../../../api/group-by-date';
import {filterBySearch} from '../../../api/filter-by-search';

class Trash extends Component {
    handleClick = mail => el => {
        if (!mail.isRead) {
            this.props.readInboxMail(mail.id);
        }
    };

    deleteMailForever = mailId => el => {
        this.props.deleteMailForever(mailId);
    };

    componentDidMount() {
        if (!this.props.isFetched) {
            this.props.fetchSpamTrashMails();
        }
    }

    render() {
        if (!this.props.isFetched) {
            return (
                <div className="spinner">
                    <PacmanLoader
                        sizeUnit={'px'}
                        size={30}
                        color={'#2196f3'}
                        loading={!this.props.isFetched}
                    />
                </div>
            );
        }
        const filteredMails = filterBySearch(this.props.mails, this.props.searchInput);
        return (
            <div>
                {
                    filteredMails.length > 0 ?
                        groupByDate(filteredMails).map(([key, mails]) => {
                            return (
                                <ExpansionPanelList
                                    key={key}
                                    groupName={key}
                                >
                                    {mails.map(mail => (
                                        <ExpansionPanel
                                            key={mail.id}
                                            mail={mail}
                                            onClick={this.handleClick(mail)}
                                            moveToTrash={this.deleteMailForever(mail.id)}
                                        />
                                    ))}
                                </ExpansionPanelList>
                            );
                        })
                        : 'You don`t have messages'
                }
                <Modal/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mails: state.trash.mails,
    isFetched: state.trash.isFetched,
    searchInput: state.searchInput.value
});

export default connect(mapStateToProps, {
    fetchSpamTrashMails,
    readInboxMail,
    deleteMailForever
})(Trash);
