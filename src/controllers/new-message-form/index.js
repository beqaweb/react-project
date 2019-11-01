import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Icon from '../../app/components/icon/icon';
import DefaultInput from '../../app/components/inputs/default-input/default-input';
import ModalButton from '../../app/components/buttons/modal-button/modal-button';
import validator from 'validator';
import {connect} from 'react-redux';
import {sendMessage} from './services/actions';

const validate = values => {
    const errors = {};

    if (!values.to) {
        errors.to = 'Required';
    }
    if (!validator.isEmail(values.to || '')) {
        errors.to = 'Invalid Email';
    }
    if (!values.subject) {
        errors.subject = 'Required';
    }
    if (!values.message) {
        errors.message = 'Required';
    }
    return errors;
};

const ReduxField = ({input, placeholder, className, multiple}) => (
    <DefaultInput
        className={className}
        placeholder={placeholder}
        multiple={multiple}
        {...input}
    />
);

class NewMessageForm extends Component {

    closeModal = () => {
        const {close} = this.props;
        if (close) {
            close();
        }
    };

    submitForm = values => {
        const {close} = this.props;
        this.props.sendMessage(values);
        if (close) {
            close();
        }
    };
    render() {
        const {handleSubmit, invalid} = this.props;
        return (
            <form onSubmit={handleSubmit(this.submitForm)}>
                <header className="modal__header">
                    <span>New Email</span>
                    <Icon
                        className="modal__close-icon"
                        onClick={this.closeModal}
                        icon="clear"
                    />
                </header>
                <div className="modal__content">
                    <div className="modal__content-mails">
                        <label className="modal__content-mails-label">
                            <span className="modal__mail-type">To</span>
                            <Field
                                name="to"
                                component={ReduxField}
                                placeholder="To@email.me"
                            />
                        </label>
                        <label className="modal__content-mails-label">
                            <span className="modal__mail-type">Cc</span>
                            <DefaultInput placeholder="cc@email.me"/>
                        </label>
                        <label className="modal__content-mails-label">
                            <span className="modal__mail-type">Bcc</span>
                            <DefaultInput placeholder="bcc@email.me"/>
                        </label>
                    </div>
                    <Field
                        className="modal_subject-input"
                        name="subject"
                        component={ReduxField}
                        placeholder="Subject"
                    />
                    <Field
                        className="modal_subject-input"
                        name="message"
                        component={ReduxField}
                        placeholder="Message Body"
                        multiple={true}
                    />
                </div>
                <div className="modal__buttons">
                    <ModalButton
                        onClick={this.closeModal}
                        type="button"
                        style={{marginRight: `${20 / 16}rem`}}
                        theme="primary" text="cancel"
                    />
                    <ModalButton
                        disabled={invalid}
                        type="submit"
                        theme="secondary"
                        text="send"
                    />
                </div>
            </form>
        );
    }
}

const NewMessageFormRedux = reduxForm({
    form: 'newMessageForm',
    validate
})(NewMessageForm);

export default connect(null, {sendMessage})(NewMessageFormRedux);
