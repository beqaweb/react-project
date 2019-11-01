import React, {Component} from 'react';
import './styles.styl';
import Icon from '../../app/components/icon';
import {setSearch} from './services/actions';
import {connect} from 'react-redux';

class SearchInput extends Component {

    handleChange = ev => {
        this.props.setSearch(ev.target.value);
    };

    render() {
        const {placeholder} = this.props;
        return (
            <label className="search-input-wrap">
                <Icon
                    icon="search"
                    style={{marginRight: 10}}
                />
                <input
                    onChange={this.handleChange}
                    className="search-input"
                    type="text"
                    placeholder={placeholder}
                />
                <Icon
                    icon="keyboard_voice"
                    style={{marginLeft: 10}}
                />
            </label>
        );
    }
}

export default connect(null, {setSearch})(SearchInput);
