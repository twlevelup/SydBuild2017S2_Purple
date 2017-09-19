import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export const NotificationScreenComponent = () => {
  return (
    <div id='Notification-page'>
      <div id='Notification-articles-container'>
        <div>
          <span id='publish-date'>Publish date: 23/05/1823</span>
          <p>My first Notification article </p>
        </div>
      </div>
    </div>
  );
};

export const NotificationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(NotificationScreenComponent, NotificationScreenButtons);
