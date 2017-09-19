import React from 'react';
import ReactDOM from 'react-dom';

import NotificationScreen from './app/pages/NotificationScreen/NotificationScreen';
import EducationScreen from './app/pages/EducationScreen/EducationScreen';
import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import LocationScreen from './app/pages/LocationScreen/LocationScreen';
import contacts from './app/data/contacts.json';
import WatchApp from './framework';


const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/notification', Component: NotificationScreen },
  { path: '/education', Component: EducationScreen },
  { path: '/location', Component: LocationScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
