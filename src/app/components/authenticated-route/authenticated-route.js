import React, {Component} from 'react';
import './styles.styl';
import {Route} from 'react-router-dom';
import AppSidebar from '../app-sidebar';
import SiteHeader from '../site-header';
import AuthCheck from '../../../controllers/auth/auth-check';

class AuthenticatedRoute extends Component {
    render() {
        const {component: RouteComponent, path, ...rest} = this.props;
        const headerTheme = path.replace('/', '');
        return (
            <Route {...rest} render={props => {
                return (
                    <div className="site-body">
                        <AppSidebar/>
                        <div className="header-main-wrap">
                            <SiteHeader
                                theme={headerTheme}
                            />
                            <div className="main">
                                <RouteComponent {...props}/>
                            </div>
                        </div>
                    </div>
                );
            }}
            />
        );
    }
}

export default AuthCheck(AuthenticatedRoute);
