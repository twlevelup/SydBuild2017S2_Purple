import React from 'react';
import { shallow } from 'enzyme';
import { LocationScreenComponent, LocationScreenButtons } from './LocationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';
import Time from '../../../framework/components/Time/Time';

jest.mock('../../../framework/util/ButtonAction');

describe('<LocationScreenComponent />', () => {

  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<LocationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should have text stating that this screen sends location', () => {
    expect(componentWrapper.find('.title')).toHaveText('Tap screen to send your location to carer');
  });

  test('it should have Time  component', () => {
    expect(componentWrapper).toContainReact(<Time />);
  });

  /*
  describe('NewsScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      NewsScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to contactList page', () => {
      NewsScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      NewsScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      NewsScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });

  });
  */
});
