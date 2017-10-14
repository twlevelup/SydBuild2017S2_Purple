import React from 'react';
import PropTypes from 'prop-types';
import CarerLocation from '../CarerLocation/CarerLocation';

const ConfigForm = ({ updateStore }) => {
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

  const onFormSumbit = () => {
    const notification = {};

    const date = document.getElementById('starting-date').value.split('-');
    const frequency = document.getElementById('frequency');
    const selectedFrequency = frequency.options[frequency.selectedIndex].text;
    const color = document.getElementById('color-picker').value;
    const range = document.getElementById('my-range').value;
    const dateTime = {
      year: date.length ? Number(date[0]) : 2017,
      month: date.length ? Number(date[1] - 1) : 10,
      day: date.length ? Number(date[2]) : 14,
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
      <form id='dropdown-menu'>
        <h4>color picker</h4>
        <input type='color' defaultValue='#ff0000' id='color-picker' onChange={ onColorChange } />
        <h4>font size</h4>
        <span id='size-info'>8</span>
        <input type='range' defaultValue='8' min='2' max='24' id='my-range' onChange={ onRangeChange } />
        <div style={ { marginTop: '10px' } }>
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
        </div>
        <div style={ { marginTop: '10px' } }>
          <input type='button' value='Save Configuration' className='submit-btn' onClick={ onFormSumbit } />
        </div>
      </form>
      <CarerLocation />
    </div>
  );
};

ConfigForm.propTypes = {
  updateStore: PropTypes.func.isRequired,
};


export default ConfigForm;
