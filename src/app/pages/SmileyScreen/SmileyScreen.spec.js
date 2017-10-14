import React from 'react';
import { mount } from 'enzyme';
import ButtonAction from '../../../framework/util/ButtonAction';
import { SmileyScreenComponent, SmileyViewScreenButtons } from './SmileyScreen';

jest.mock('../../../framework/util/ButtonAction');

describe('MoodScreen ', () => {
  let componentWrapper;
  beforeEach(() => {
    componentWrapper = mount(
      <SmileyScreenComponent />
    );
  });
  it('displays text what is your mood', () => {
    expect(componentWrapper.find('.upText')).toHaveLength(1);
  });
  it('displays text list of responses', () => {
    expect(componentWrapper.find('.downText')).toHaveLength(1);
  });
  test('it should have a MIDDLE button config of going to home page', () => {
    SmileyViewScreenButtons.SCREEN();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });
});
