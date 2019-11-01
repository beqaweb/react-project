import React, {Component} from 'react';
import './styles.styl';
import {NavLink} from 'react-router-dom';
import Icon from '../icon';
import PropTypes from 'prop-types';

class NavListItem extends Component {
    render() {
        const {text, to, icon, badge, ...rest} = this.props;
        return (
            <li className={`nav-li ${badge && 'bold'}`}>
                <NavLink
                    exact={true}
                    className="nav-link"
                    activeClassName="active"
                    to={to ? to : '/'}
                    {...rest}
                >
                    {
                        icon ?
                            <Icon
                                className="nav-link__icon"
                                icon={icon}
                            />
                            : null
                    }
                    <span>{text ? text : 'text'}</span>
                    {
                        badge ?
                            <span className="nav-link__badge">{badge}</span>
                            : null
                    }
                </NavLink>
            </li>
        );
    }
}

NavListItem.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string,
    badge: PropTypes.number
};

export default NavListItem;
