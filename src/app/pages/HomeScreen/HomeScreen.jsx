  import React from 'react';
  import Date from '../../../framework/components/Date/Date';
  import Time from '../../../framework/components/Time/Time';
  import ButtonAction from '../../../framework/util/ButtonAction';
  import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

  import logo from './logo.png';

  export const HomeScreenComponent = () => {
    return (
      <div id='watch-home-page'>
        <Date />
        <Time />

        <div id='home-page-content'>
          <img src={ logo } alt='logo' />

          <div>Hello, World!</div>

          <p>
          Click to notify notation
        </p>
        </div>
      </div>
    );
  };

  export const HomeScreenButtons = {
    TOP: () => ButtonAction.goToPage('/location'),
    BOTTOM: () => ButtonAction.goToPage('/nav'),
    LEFT: () => ButtonAction.goToPage('/notification'), // this will make the left button navigate to the news page
    RIGHT: () => ButtonAction.goToPage('/mood'),
    SCREEN: () => ButtonAction.doNothing(),
  };

  export default WithButtonConfigs(HomeScreenComponent, HomeScreenButtons);
