import React from 'react';
import { mount } from 'enzyme';
import ButtonAction from '../../../framework/util/ButtonAction';
import { MoodScreenComponent, MoodViewScreenButtons } from './MoodScreen';

jest.mock('../../../framework/util/ButtonAction');

describe('MoodScreen ', () => {
  let componentWrapper;
  beforeEach(() => {
    componentWrapper = mount(
      <MoodScreenComponent />
    );
  });
  it('displays text what is your mood', () => {
    expect(componentWrapper.find('.upText')).toHaveText('How are you feeling?');
  });
  it('displays text list of responses', () => {
    expect(componentWrapper.find('.downText')).toHaveText('List of responses');
  });
  test('it should have a MIDDLE button config of going to home page', () => {
    MoodViewScreenButtons.SCREEN();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });
  test('it should have a UP button config of going to smiley screen', () => {
    MoodViewScreenButtons.TOP();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/smiley');
  });
});
