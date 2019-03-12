import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppAbout from './AppAbout';
import AppContact from './AppContact';
import AppGallery from './AppGallery';
import App from './App';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={AppAbout}/>
            <Route exact path="/galerry" component={AppGallery}/>
            <Route exact path="/contact" component={AppContact}/>
            <Route exact path="/news" component={App}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/signin" component={Signin}/>

        </Switch>
    )
}
export default MainRoute;