import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "../../styles/Styles.css";

import { HiOutlineCalculator } from "react-icons/hi2";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    "WFH Setup Available": 'Yes',
    "Designation": undefined,
    "Mental Fatigue Score": undefined,
    "Resource Allocation": undefined,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    const jsonPayload = JSON.stringify(formData);

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post('http://localhost:5000/api/predictBurnOut', jsonPayload, { headers });

      console.log('Response Status Code:', response.status);
      console.log('Response JSON:', JSON.stringify(response.data, null, 2));

      if (response.status == 200){
        setLoading(false);

        navigate('/burnout', { state: { responseData: response.data } });
      };
       
    } catch (error) {
      console.error('Error:', error.message);
    };
  };

  return (
    <div className='hero_container'>
      <div className='form_container'>
        <div className='form__title'>
          <h3>Calculate Burn Out</h3>
          <p>let's calculate your burn rate</p>
        </div>

        <form onSubmit={handleClick}>
          <div className='form-group'>
            <label htmlFor='WFH Setup Available'>WFH Setup Available</label>
            <select name='WFH Setup Available' id='WFH Setup Available' onChange={handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='Designation'>Designation</label>
            <input type='number' name='Designation' id='Designation' min={0} max={5} onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Mental Fatigue Score'>Mental Fatigue Score</label>
            <input type='text' name='Mental Fatigue Score' id='Mental Fatigue Score' onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Resource Allocation'>Resource Allocation</label>
            <input type='number' name='Resource Allocation' id='Resource Allocation' onChange={handleChange}/>
          </div>
          <button type='submit' className='form__btn'>
            {loading ? (
              <div className='btn_ctn'>
                <div className='loader'></div>
                <p>Making Predictions...</p>
              </div>
            ) : (
              <div className='btn_ctn'>
                <HiOutlineCalculator/>
                <p>Calculate</p>
              </div>
            )} 
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee