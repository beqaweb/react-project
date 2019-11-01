import React, {Component} from 'react';
import AuthenticatedRoute from './components/authenticated-route';
import {Route, Switch, withRouter} from 'react-router-dom';
import Index from '../routes/inbox';
import Sent from '../routes/sent';
import Spam from '../routes/spam';
import Trash from '../routes/trash';
import NotFound from '../routes/not-found';
import {connect} from 'react-redux';
import {fetchUser} from '../auth/actions';
import Login from '../routes/login/controllers';
import {BounceLoader} from 'react-spinners';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        if (this.props.location.pathname === '/') {
            this.props.history.push('/inbox');
        }
    }
    render() {
        if (this.props.auth === false) {
            return (
                <div className="spinner">
                    <BounceLoader
                        sizeUnit={'px'}
                        size={50}
                        color={'#2196f3'}
                        loading={this.props.auth === false}
                    />
                </div>
            );
        }
        return (
            <Switch>
                <Route exact={true} path="/login" component={Login} />
                <AuthenticatedRoute exact={true} path="/inbox" component={Index}/>
                <AuthenticatedRoute exact={true} path="/sent" component={Sent}/>
                <AuthenticatedRoute exact={true} path="/spam" component={Spam}/>
                <AuthenticatedRoute exact={true} path="/trash" component={Trash}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps, {fetchUser})(App));
