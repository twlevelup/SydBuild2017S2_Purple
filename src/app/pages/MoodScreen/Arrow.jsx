import React from 'react';
import PropTypes from 'prop-types';

const ArrowComponent = ({ direction = 'up' }) => {
  return (
    <div className='arrow'>
      {direction === 'up' ? '\u25b2' : '\u25bc'}
    </div>
  );
};

ArrowComponent.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default ArrowComponent;
