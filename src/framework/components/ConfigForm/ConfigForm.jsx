import React from 'react';
import PropTypes from 'prop-types';
import CarerLocation from '../CarerLocation/CarerLocation';

const ConfigForm = ({ handleSubmit }) => {
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


  return (
    <div>
      <h2>ConfigForm</h2>
      <form id='dropdown-menu' onSubmit={ event => handleSubmit(event) }>
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
        <input type='submit' value='change color' onChange={ handler } className='submit-btn' />
        <h4>font size</h4>
        <span id='size-info'>8</span>
        <input type='range' defaultValue='8' min='2' max='24' id='my-range' onChange={ onRangeChange } />
        <input type='submit' value='resize' className='submit-btn' onChange={ handler } />
      </form>
      <CarerLocation />
    </div>
  );
};

ConfigForm.propTypes = {
  handleSubmit: PropTypes.func,
};
ConfigForm.defaultProps = {
  handleSubmit: () => {},
};

export default ConfigForm;