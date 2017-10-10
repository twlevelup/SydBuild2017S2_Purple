import React from 'react';

export default () => {
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
  return (
    <div>
      <h2>ConfigForm</h2>
      <form id='dropdown-menu' onSubmit={ event => this.handleSubmit(event) }>
        <select id='hours'>
          { hours }
        </select>
        <select id='minutes'>
          { minutes }
        </select>
        <select id='repeat'>
          <option>daily</option>
          <option>weekly</option>
          <option>monthly</option>
          <option>annually</option>
        </select>
        <input type='submit' value='send time' className='submit-btn' onChange={ handler } />
        <h4>color picker</h4>
        <input type='color' value='#ff0000' onChange={ handler } />
        <input type='submit' value='change color' onChange={ handler } className='submit-btn' />
        <h4>font size</h4>
        <span id='size-info'>8</span>
        <input type='range' defaultValue='8' min='2' max='24' id='font-size' onChange={ handler } />
        <input type='submit' value='resize' className='submit-btn' onChange={ handler } />
      </form>
    </div>
  );
};
