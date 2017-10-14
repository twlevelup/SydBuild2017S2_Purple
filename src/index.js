import React from 'react';
import ReactDOM from 'react-dom';

import NotificationScreenContainer from './app/pages/NotificationScreen/NotificationScreenWrapper';
import EducationScreen from './app/pages/EducationScreen/EducationScreen';
import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import ContactViewScreen from './app/pages/ContactViewScreen/ContactViewScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import NavScreen from './app/pages/NavScreen/NavScreen';
import LocationScreen from './app/pages/LocationScreen/LocationScreen';
import MoodScreen from './app/pages/MoodScreen/MoodScreen';
import MapScreen from './app/pages/MapScreen/MapScreen';
import SmileyScreen from './app/pages/SmileyScreen/SmileyScreen';
// import notifications from './app/data/notifications.json';
import contacts from './app/data/contacts.json';
import locations from './app/data/locations.json';
import WatchApp from './framework';


const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/contact-view', Component: ContactViewScreen },
  { path: '/counter', Component: CounterScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/notification', Component: NotificationScreenContainer },
  { path: '/education', Component: EducationScreen },
  { path: '/nav', Component: NavScreen, props: { locations } },
  { path: '/location', Component: LocationScreen },
  { path: '/mood', Component: MoodScreen },
  { path: '/map', Component: MapScreen },
  { path: '/smiley', Component: SmileyScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
