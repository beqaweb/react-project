import React, {Component} from 'react';
import '../styles.styl';
import ExpansionPanel from '../../../app/components/expansion-panel';
import ExpansionPanelList from '../../../app/components/expansion-panel-list';
import Modal from '../../../app/components/modal';
import {connect} from 'react-redux';
import {fetchSentMails} from './services/actions';
import {PacmanLoader} from 'react-spinners';
import {groupByDate} from '../../../api/group-by-date';
import {filterBySearch} from '../../../api/filter-by-search';

class Sent extends Component {
    componentDidMount() {
        if (!this.props.isFetched) {
            this.props.fetchSentMails();
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
        const filteredMails = filterBySearch(this.props.mails, this.props.searchInput, 'to');
        // eslint-disable-next-line no-console
        console.log(this.props);
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
    mails: state.sent.mails,
    isFetched: state.sent.isFetched,
    searchInput: state.searchInput.value
});

export default connect(mapStateToProps, {fetchSentMails})(Sent);
