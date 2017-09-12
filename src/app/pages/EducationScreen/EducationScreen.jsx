import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export const EducationScreenComponent = () => {
  return (
    <div id='education-page'>
      <div id='education-articles-container'>
        <div>
          <span id='publish-date'>Publish date: 23/05/1823</span>
          <p>My first education article </p>
        </div>
      </div>
    </div>
  );
};

export const EducationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(EducationScreenComponent, EducationScreenButtons);
