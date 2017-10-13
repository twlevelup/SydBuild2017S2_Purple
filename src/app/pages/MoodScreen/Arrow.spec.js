import React from 'react';
import { shallow } from 'enzyme';
// import ButtonAction from '../../../framework/util/ButtonAction';
import Arrow from './Arrow';

describe('ArrowComponent ', () => {
  it('displays up arrow when direction is up', () => {
    const arrow = shallow(<Arrow direction='up'/>);
    expect(arrow).toHaveText('\u25b2');
  });
  it('displays down arrow when direction is down', () => {
    const arrow = shallow(<Arrow direction='down'/>);
    expect(arrow).toHaveText('\u25bc');
  });
});
