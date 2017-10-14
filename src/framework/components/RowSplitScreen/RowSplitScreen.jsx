import React from 'react';
import PropTypes from 'prop-types';

import './row_split_screen.css';

const RowSplitScreenComponent = ({ top, bottom }) => {
  return (
    <div className='screen-wrapper'>
      <div className='screen-half'>
        {top}
      </div>
      <div className='screen-half'>
        {bottom}
      </div>
    </div>
  );
};

RowSplitScreenComponent.propTypes = {
  top: PropTypes.element.isRequired,
  bottom: PropTypes.element.isRequired,
};


export default RowSplitScreenComponent;
