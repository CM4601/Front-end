import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Styles.css";

import { RiAiGenerate } from "react-icons/ri";

const GenerateTeam = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false); 
      navigate("/genteam");
  }, 3000);
  };

  return (
    <div className='hero_container'>
      <div className='form_container'>
        <div className='form__title'>
          <h3>Generate Your Team</h3>
          <p>use team craft to generate your optimal team</p>
        </div>

        <form onSubmit={handleClick}>
          <div className='form-group'>
            <label htmlFor='designation'>Designations</label>
            <select name='designation'>
              <option value="0">Technical Lead</option>
              <option value="1">Associate Technical lead</option>
              <option value="2">Senior Software Engineer</option>
              <option value="3">Software Engineer</option>
              <option value="4">Associate Engineer</option>
              <option value="5">Intern</option>
            </select>
          </div>
          <button type='submit' className='form__btn'>
          {loading ? (
              <div className='btn_ctn'>
                <div className='loader'></div>
                <p>Generating...</p>
              </div>
            ) : (
              <div className='btn_ctn'>
                <RiAiGenerate/>
                <p>Generate</p>
              </div>
            )} 
          </button>
        </form>
      </div>
    </div>
  )
}

export default GenerateTeam;