import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import giff from '../../assests/fireball.gif';
import errImg from '../../assests/Error.gif';

import "../../styles/Styles.css";

const DisplayBurnOut = () => {
  const location = useLocation();

  if (!location.state || !location.state.responseData) {
    return (
      <div className='hero_container'>
        <div className='output_container'>
          <img src={errImg} alt="error gif"/>

          <h3>No Data Available</h3>
        </div>
      </div>
    )
  }

  // Access the response data from state
  const responseData = location.state.responseData;

  return (
    <div className='hero_container'>
        <div className='output_container'>
          <h3 className='title_bro'>Burn Out Rate</h3>
          <img src={giff} alt="fireball gif"/>

          <h3>{JSON.stringify(parseFloat(responseData.prediction.toFixed(4)) , null, 2)}</h3>
        </div>
    </div>
  )
}

export default DisplayBurnOut