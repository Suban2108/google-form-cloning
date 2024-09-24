import React from 'react';
import './Box3.css';

const Box3 = ({ b,title }) => {
  return (
    <div className='box3 mt-3'>
      <p>{title} <span>*</span></p>
      {b.map((item, index) => (
        <div key={index} className='checkbox-item'>
          <input type="checkbox" id={`checkbox-${index}`} name={item} value={item} />
          <label htmlFor={`checkbox-${index}`}>{item}</label>
        </div>
      ))}
      <div className='other-item'>
        <input type="checkbox" id="checkbox-other" className='other' />
        <label htmlFor="checkbox-other">Other:</label>
        <input type="text" className='others-input' placeholder='Specify other technologies' />
      </div>
      <div className="hr mb-2"></div>
    </div>
  );
};

export default Box3;
