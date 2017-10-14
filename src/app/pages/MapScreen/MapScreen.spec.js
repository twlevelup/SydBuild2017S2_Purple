import React from 'react';
import { shallow } from 'enzyme';
import { MapScreenComponent, MapScreenButtons } from './MapScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');
describe('MapScreen', () => {
  it('should render a MapScreen', () => {
    const mapScreen = shallow(<MapScreenComponent location={ { lat: 1, lng: 1 } } />);
    expect(mapScreen.find('withGoogleMap(Component)')).toBePresent();
  });


  // it('should render from GMaps', () => {
    // const componentWrapper = </>
    // expect(componentWrapper.find('GoogleMap')).toBePresent();
        // look for where the gmaps result is rendered.
        // step 1 look for <img>
        // step 2 maybe img tag has other properties?

        // ensure that http call is made to gmaps api, with certain parameters
  // });

  describe('MapScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      MapScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to home page', () => {
      MapScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a TOP button config of going to home page', () => {
      MapScreenButtons.TOP();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a BOTTOM button config of going to home page', () => {
      MapScreenButtons.BOTTOM();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a SCREEN button config of going to home page', () => {
      MapScreenButtons.SCREEN();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });
  });
});

