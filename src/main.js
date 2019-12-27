
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

/** Jquery **/

/** Css **/
require('./main.less');

/** View **/
import App from './views/App.js';
import Projects from './views/Projects.js';
import Error404 from './views/Error404.js';

import ChartJs from './sources/ChartJs/views/ChartJs';
import Labs from './sources/LabsJs/view/Labs';
import CssModule from './sources/CssModule/view';


/** Redux  init **/
import { Provider } from 'react-redux'

import store from './redux/store/Store';

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/chartjs" component={ChartJs}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/labs" component={Labs}/>
            <Route path="/css-module" component={CssModule}/>
            <Route path="*" component={Error404}/>
        </Router>
    </Provider>
), document.getElementById('content'));
