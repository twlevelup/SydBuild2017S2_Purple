import React from 'react';
import { shallow } from 'enzyme';
// import ButtonAction from '../../../framework/util/ButtonAction';
import RowSplitScreenComponent from './RowSplitScreen';


describe('RowSplitScreenComponent', () => {
  let componentWrapper;
  it('has classes when passed in as top and bottom', () => {
    const top = (<div className='top'>top</div>);
    const bottom = (<div className='bottom'>bottom</div>);
    componentWrapper = shallow(<RowSplitScreenComponent
      top={ top }
      bottom={ bottom }
    />);
    expect(componentWrapper.find('.top')).toBePresent();
    expect(componentWrapper.find('.bottom')).toBePresent();
  });

  /*
  it('should have a header', () => {
    expect(componentWrapper.find('h2')).toBePresent();
  });

  it('should display the required contact based on the url path', () => {
    expect(componentWrapper.find('.name')).toHaveText('Name: MeMeMEEE');
  });

  test('it should have a LEFT button config of going to Counter Page with an initial number value of 5', () => {
    ContactViewScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/counter', state: { number: 5 } });
  });

  test('it should have a RIGHT button config of going to contactList page', () => {
    ContactViewScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
  });

  test('it should have a TOP button config of scrolling page up', () => {
    ContactViewScreenButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button config of scrolling page down', () => {
    ContactViewScreenButtons.BOTTOM();
    expect(ButtonAction.scrollDown).toHaveBeenCalled();
  });
  */
});
