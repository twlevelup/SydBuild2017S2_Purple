import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

let count = 0;
//    localStorage.getItem('count') || 0;

const EducationString = ['My first education is amazingly wonderfgul blah'
 + 'blah blah this is filler text ispum lorem blah'
 + 'blah blah article a a a a a a a b b b'
 + 'foiqshfib qEOIFHSuib worihfaksjbclJGH'
 + 'WOEFHodABCLWJNEFON soghpiub lkgjop arighpousvbs'
 + 'blah blah this is filler text ispum lorem blah'
 + 'blah blah article a a a a a a a b b b'
 + 'foiqshfib qEOIFHSuib worihfaksjbclJGH'
 + 'WOEFHodABCLWJNEFON soghpiub lkgjop arighpousvbs'
 + 'blah blah this is filler text ispum lorem blah'
 + 'blah blah article a a a a a a a b b b'
 + 'foiqshfib qEOIFHSuib worihfaksjbclJGH'
 + 'foiqshfib qEOIFHSuib worihfaksjbclJGH'
 + 'WOEFHodABCLWJNEFON soghpiub lkgjop arighpousvbs'
 + 'blah blah this is filler text ispum lorem blah'
 + 'blah blah article a a a a a a a b b b'
 + 'foiqshfib qEOIFHSuib worihfaksjbclJGH'
 + 'WOEFHodABCLWJNEFON soghpiub lkgjop arighpousvbs'
 + 'blah blah this is filler text ispum lorem blah'
 + 'blah blah article a a a a a a a b b b'
 + 'foiqshfib qEOIFHSuib worihfaksjbclJGH'
 + 'WOEFHodABCLWJNEFON soghpiub lkgjop arighpousvbs',
  'My second education article', 'My third education article'];

export const EducationScreenComponent = () => {
  return (
    <div id='education-page'>
      <div id='education-articles-container'>
        <div>
          <span id='publish-date'>Publish date: 23/05/1823</span>
          <p>{EducationString[count % 3]} </p>
        </div>
      </div>
    </div>
  );
};

export const EducationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => {
    count = (count + 1) % 3;
    //  localStorage.setItem('count', count);
    ButtonAction.goToPage('/education');
  },
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
  SCREEN: () => {
    count = 0;
    //  localStorage.setItem('count', count);
    ButtonAction.goToPage('/');
  },
};


export default WithButtonConfigs(EducationScreenComponent, EducationScreenButtons);
