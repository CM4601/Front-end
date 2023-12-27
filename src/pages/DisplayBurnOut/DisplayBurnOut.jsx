import React, { useState } from 'react';

import giff from '../../assests/fireball.gif';

import "../../styles/Styles.css";

const DisplayBurnOut = () => {
  return (
    <div className='hero_container'>
        <div className='output_container'>
            <img src={giff} alt="fireball gif"/>

            <h3>5.2</h3>
        </div>
    </div>
  )
}

export default DisplayBurnOut