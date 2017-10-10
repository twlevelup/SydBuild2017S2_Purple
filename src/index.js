import React from 'react';
import ReactDOM from 'react-dom';

import NotificationScreen from './app/pages/NotificationScreen/NotificationScreen';
import EducationScreen from './app/pages/EducationScreen/EducationScreen';
import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import ContactViewScreen from './app/pages/ContactViewScreen/ContactViewScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import NavScreen from './app/pages/NavScreen/NavScreen';
import LocationScreen from './app/pages/LocationScreen/LocationScreen';
import notifications from './app/data/notifications.json';
import contacts from './app/data/contacts.json';
import locations from './app/data/locations.json';
import WatchApp from './framework';


const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/contact-view', Component: ContactViewScreen },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/notification', Component: NotificationScreen, props: { notifications } },
  { path: '/education', Component: EducationScreen },
  { path: '/nav', Component: NavScreen, props: { locations } },
  { path: '/location', Component: LocationScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
