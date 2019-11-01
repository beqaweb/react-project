import React, {Component} from 'react';
import './styles.styl';
import SearchInput from '../../../controllers/set-search-input';
import Avatar from '../avatar';
import PropTypes from 'prop-types';

const avatar = 'https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg.pagespeed.ce.F3X__0vZO7.jpg';

class SiteHeader extends Component {
    render() {
        const {theme = 'inbox'} = this.props;
        return (
            <header className={`site-header site-header__theme-${theme}`}>
                <SearchInput placeholder="Search"/>
                <Avatar src={avatar}/>
            </header>
        );
    }
}

SiteHeader.propTypes = {
    theme: PropTypes.string
};

export default SiteHeader;
