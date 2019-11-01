import React, {Component} from 'react';
import './styles.styl';
import NotFoundImg from './not-found.png';

class NotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <img
                    className="page-not-found_img"
                    src={NotFoundImg}
                    alt="Not Found"
                />
            </div>
        );
    }
}

export default NotFound;
