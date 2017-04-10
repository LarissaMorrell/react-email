require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import EmailAccountContainer from './components/email-account-container';
import MailboxContentContainer from './components/mailbox-content-container';
import App from './components/app';

const routes = (
    <Router history={hashHistory}>
        <Route path="/emails" component={App}>
            <IndexRoute component={EmailAccountContainer} />
            <Route path=":mailbox-name" component={MailboxContentContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);

