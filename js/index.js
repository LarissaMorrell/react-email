require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import EmailAccountContainer from './components/email-account-container';
import MailboxContentContainer from './components/mailbox-content-container';
import App from './components/app';
import Page404 from './components/Page404';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={EmailAccountContainer} />
            <Route path="/:mailbox/:id" component={MailboxContentContainer} />
            <Route path="*" component={Page404} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);

