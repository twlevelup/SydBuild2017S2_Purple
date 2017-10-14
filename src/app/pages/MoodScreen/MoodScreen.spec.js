import React from 'react';
import { mount } from 'enzyme';
// import ButtonAction from '../../../framework/util/ButtonAction';
import { MoodScreenComponent } from './MoodScreen';

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
});
