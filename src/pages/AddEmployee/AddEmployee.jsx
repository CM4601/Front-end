import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Styles.css";

import { HiOutlineCalculator } from "react-icons/hi2";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    wfh: 'Yes',
    designation: undefined,
    mfs: undefined,
    resourceal: undefined,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    setLoading(true);

    console.log(formData);

    setTimeout(() => {
      setLoading(false); 
      navigate("/burnout")
  }, 3000);
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
            <label htmlFor='wfh'>WFH Setup Available</label>
            <select name='wfh' onChange={handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='designation'>Designation</label>
            <input type='number' name='designation' id='designation' onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <label htmlFor='mfs'>Mental Fatigue Score</label>
            <input type='text' name='mfs' id='mfs' onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <label htmlFor='resourceal'>Resource Allocation</label>
            <input type='number' name='resourceal' id='resourceal' onChange={handleChange}/>
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