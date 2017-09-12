import React from 'react';
import { shallow } from 'enzyme';
import { EducationScreenComponent, EducationScreenButtons } from './EducationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<EducationScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<EducationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display the article publish date', () => {
    expect(componentWrapper.find('#publish-date')).toHaveText('Publish date: 23/05/1823');
  });

  it('should display (my first education article) by default', () => {
    expect(componentWrapper).toIncludeText('My first education article');
  });

  describe('EducationScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      EducationScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to contactList page', () => {
      EducationScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      EducationScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      EducationScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });
  });
});
