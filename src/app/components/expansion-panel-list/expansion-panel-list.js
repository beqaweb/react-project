import React, {Component} from 'react';
import './styles.styl';

class ExpansionPanelList extends Component {
    render() {
        return (
            <div className="expansion-panel-list">
                <span className="expansion-panel-list__title">{this.props.groupName}</span>
                {this.props.children}
            </div>
        );
    }
}

export default ExpansionPanelList;
