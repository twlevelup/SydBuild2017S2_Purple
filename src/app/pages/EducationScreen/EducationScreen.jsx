import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

const count = 0;

const EducationString = ['My first education article', 'My second edu article', 'My third edu article'];

export const EducationScreenComponent = () => {
  return (
    <div id='education-page'>
      <div id='education-articles-container'>
        <div>
          <span id='publish-date'>Publish date: 23/05/1823</span>
          <p>{EducationString[count]} </p>
        </div>
      </div>
    </div>
  );
};

export const EducationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/Education'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};


export default WithButtonConfigs(EducationScreenComponent, EducationScreenButtons);
