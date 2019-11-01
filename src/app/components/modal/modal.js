import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './styles.styl';
import AddButton from '../buttons/add-button';
import NewMessageForm from '../../../controllers/new-message-form';

const root = document.querySelector('#modal-root');

class Modal extends Component {
    state = {
        open: false
    };

    openModal = () => {
        this.setState({
            open: true
        });
    };

    closeModal = () => {
        this.setState({
            open: false
        });
    };

    stopPropagation = ev => {
        ev.stopPropagation();
    };

    render() {
        const {open} = this.state;
        return (
            <Fragment>
                <AddButton
                    className={`modal__add-button ${open ? 'add-button__fade' : ''}`}
                    onClick={this.openModal}
                />
                { open &&
                    ReactDOM.createPortal(
                        <div role="presentation" className="modal" onClick={this.closeModal}>
                            <div role="presentation" className="modal__body" onClick={this.stopPropagation}>
                                <NewMessageForm close={this.closeModal}/>
                            </div>
                        </div>,
                        root
                    )
                }
            </Fragment>
        );
    }
}

export default Modal;
