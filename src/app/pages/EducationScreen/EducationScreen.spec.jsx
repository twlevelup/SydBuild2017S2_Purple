import React from 'react';
import { shallow } from 'enzyme';
import { EducationScreenComponent, EducationScreenButtons } from './EducationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');
//  jest.mock(localStorage);

describe('<EducationScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<EducationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display the article publish date', () => {
    expect(componentWrapper.find('#publish-date')).toHaveText('Publish date: 23/05/1823');
  });

  it('should display (Education screen) by default', () => {
    expect(componentWrapper).toIncludeText('My first education');
  });

  describe('EducationScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      EducationScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to education page', () => {
      EducationScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/education');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      EducationScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      EducationScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });

    test('it should have a SCREEN button config of going to home page', () => {
      EducationScreenButtons.SCREEN();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });
  });
});
