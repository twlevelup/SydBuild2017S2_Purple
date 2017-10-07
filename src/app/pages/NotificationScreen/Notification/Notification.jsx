import React from 'react';
import { string, number, shape } from 'prop-types';

const Notification = (props) => {
  const {
    description,
    dateTime,
  } = props;

  return (
    <div className='notification'>
      <div className='description'>
        <b>Description</b>: {description}
      </div>
      <div className='dateTime'>
        <b>DateTime</b>: {dateTime.year}-{dateTime.month}-{dateTime.day} {dateTime.hour}:{dateTime.minute}
      </div>
      <br />
    </div>
  );
};

Notification.propTypes = {
  description: string.isRequired,
  dateTime: shape({
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
  }).isRequired,
};

export default Notification;
