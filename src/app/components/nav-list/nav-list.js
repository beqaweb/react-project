import React, {Component} from 'react';
import './styles.styl';

class NavList extends Component {
    render() {
        return (
            <nav className="nav-site">
                <ul className="nav-list">
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

export default NavList;
