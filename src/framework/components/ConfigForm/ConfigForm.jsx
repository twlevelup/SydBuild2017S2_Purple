import React from 'react';
import PropTypes from 'prop-types';
import CarerLocation from '../CarerLocation/CarerLocation';

const ConfigForm = ({ appStore, updateStore }) => {
  const hours = [];
  const minutes = [];
  for (let i = 0; i < 25; i++) {
    hours.push(<option className='rows' key={ i }>{ i }</option>);
  }
  for (let i = 0; i < 61; i++) {
    minutes.push(<option className='rows' key={ i }>{ i }</option>);
  }
  const handler = () => {

  };
  const onRangeChange = () => {
    const value = document.getElementById('my-range').value;
    document.getElementById('size-info').innerHTML = value;
    localStorage.setItem('size-info', value);
  };

  const onColorChange = () => {
    const color = document.getElementById('color-picker').value;
    localStorage.setItem('color-picker', color);
  };
  const onReminderSubmit = () => {
    const time = document.getElementById('time').value;
    const date = document.getElementById('starting-date').value;
    const frequency = document.getElementById('frequency');
    const selectedFrequency = frequency.options[frequency.selectedIndex].text;
    localStorage.setItem('time', time);
    localStorage.setItem('starting-date', date);
    localStorage.setItem('frequency', selectedFrequency);
  };

  const onFormSumbit = () => {
    const notification = {};

    const time = document.getElementById('time').value;
    const date = document.getElementById('starting-date').value;
    const frequency = document.getElementById('frequency');
    const selectedFrequency = frequency.options[frequency.selectedIndex].text;
    const color = document.getElementById('color-picker').value;
    const range = document.getElementById('my-range').value;
    notification.dateTime = {};
    notification.dateTime.year = date;
    notification.dateTime.month = date;
    notification.dateTime.day = date;
    notification.dateTime.hour = date;
    notification.dateTime.minute = time;
    notification.frequency = selectedFrequency;
    notification.color = color;
    notification.range = range;
    updateStore('notification', notification);
  };

  return (
    <div>
      <h2>ConfigForm</h2>
      <div> { JSON.stringify(appStore) }</div>
      <form id='dropdown-menu'>
        <input type='time' id='time' />
        <input type='date' id='starting-date' />
        <select id='frequency'>
          <option>daily</option>
          <option>weekly</option>
          <option>monthly</option>
          <option>annually</option>
        </select>
        <input type='button' value='set reminder' className='submit-btn' onClick={ onReminderSubmit } />
        <h4>color picker</h4>
        <input type='color' defaultValue='#ff0000' id='color-picker' onChange={ onColorChange } />
        <input type='button' value='change color' onChange={ handler } className='submit-btn' />
        <h4>font size</h4>
        <span id='size-info'>8</span>
        <input type='range' defaultValue='8' min='2' max='24' id='my-range' onChange={ onRangeChange } />
        <input type='button' value='resize' className='submit-btn' onClick={ handler } />
        <input type='button' value='Save Configuration' className='submit-btn' onClick={ onFormSumbit } />
      </form>
      <CarerLocation />
    </div>
  );
};

ConfigForm.propTypes = {
  appStore: PropTypes.shape().isRequired,
  updateStore: PropTypes.func.isRequired,
};
ConfigForm.defaultProps = {
  handleSubmit: () => {},
  appStore: { generalStore: { notification: { } } },
};

export default ConfigForm;
