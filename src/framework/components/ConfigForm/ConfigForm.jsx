import React from 'react';
import PropTypes from 'prop-types';
import CarerLocation from '../CarerLocation/CarerLocation';

const ConfigForm = ({ appStore, updateStore }) => {
  const hours = [];
  const minutes = [];
  for (let i = 0; i < 24; i++) {
    hours.push(<option className='rows' value={ i } key={ i }>{ i }</option>);
  }
  for (let i = 0; i < 60; i++) {
    minutes.push(<option className='rows' value={ i } key={ i }>{ i }</option>);
  }

  const onRangeChange = () => {
    const value = document.getElementById('my-range').value;
    document.getElementById('size-info').innerHTML = value;
    localStorage.setItem('size-info', value);
  };

  const onColorChange = () => {
    const color = document.getElementById('color-picker').value;
    localStorage.setItem('color-picker', color);
  };
  // const onReminderSubmit = () => {
  //   const hour = document.getElementById('hour');
  //   const minute = document.getElementById('minute');
  //   const date = document.getElementById('starting-date').value;
  //   const frequency = document.getElementById('frequency');
  //   const selectedFrequency = frequency.options[frequency.selectedIndex].text;
  //   localStorage.setItem('hour', hour);
  //   localStorage.setItem('minute', time);
  //   localStorage.setItem('starting-date', date);
  //   localStorage.setItem('frequency', selectedFrequency);
  // };

  const onFormSumbit = () => {
    const notification = {};

    // const hour = document.getElementById('hour');
    // const minute = document.getElementById('minute');
    const date = document.getElementById('starting-date').value.split('-');
    const frequency = document.getElementById('frequency');
    const selectedFrequency = frequency.options[frequency.selectedIndex].text;
    const color = document.getElementById('color-picker').value;
    const range = document.getElementById('my-range').value;
    // console.log('time: ', document.getElementById('time').value);
    const dateTime = {
      year: date[0],
      month: date[1] - 1,
      day: date[2],
      hour: document.getElementById('hour').value,
      minute: document.getElementById('minute').value,
    };
    notification.dateTime = dateTime;
    notification.frequency = selectedFrequency;
    notification.color = color;
    notification.fontSize = range;
    updateStore('notification', notification);
  };

  return (
    <div>
      <h2>ConfigForm</h2>
      <div> { JSON.stringify(appStore) }</div>
      <form id='dropdown-menu'>
        <select id='hour'>
          {hours}
        </select>
        <select id='minute'>
          {minutes}
        </select>
        <input type='date' id='starting-date' />
        <select id='frequency'>
          <option>daily</option>
          <option>weekly</option>
          <option>monthly</option>
          <option>annually</option>
        </select>
        <input type='button' value='set reminder' className='submit-btn' onClick={ () => {} } />
        <h4>color picker</h4>
        <input type='color' defaultValue='#ff0000' id='color-picker' onChange={ onColorChange } />
        <h4>font size</h4>
        <span id='size-info'>8</span>
        <input type='range' defaultValue='8' min='2' max='24' id='my-range' onChange={ onRangeChange } />
        <div style={ { marginTop: '10px' } }>
          <input type='button' value='Save Configuration' className='submit-btn' onClick={ onFormSumbit } />
        </div>
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
  appStore: { generalStore: { notification: { } } },
};

export default ConfigForm;
