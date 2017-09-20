import React from 'react';
import { shallow } from 'enzyme';
import { MoodScreenComponent } from './MoodScreen';

describe('MoodScreen component', () => {
  let moodScreenComponent;
  beforeEach(() => {
    moodScreenComponent = shallow(<MoodScreenComponent />);
  });

  it('should have a title when rendered', () => {
    expect(moodScreenComponent.find('.title')).toHaveText('How do you feel?');
  });
});
