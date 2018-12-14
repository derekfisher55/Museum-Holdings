import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Switch } from 'react-router';

import '../css/base.css';
import '../css/mainpage.css';
import '../css/menu.css';
import '../css/info.css';
import '../css/catalog.css';
import '../css/contact.css';
import '../css/announcement.css';

import MainPage from './mainPage/mainPage.js';
import InfoPage from './infoPage/infoPage.js';
import CatalogBox from './catalogPage/catalogBox.js';
import ContactPage from './contactPage/contactPage.js';
import AnnouncmentsPage from './announcementsPage/annPage.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainPage}/>
    <Route path="/announcements" component={AnnouncmentsPage}/>
    <Route path="/catalog" component={CatalogBox}/>
    <Route path="/info" component={InfoPage}/>
    <Route path="/contact" component={ContactPage}/>
  </Router>,
  document.getElementById('content')
);
