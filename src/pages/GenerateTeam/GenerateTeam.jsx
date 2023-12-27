import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "../../styles/Styles.css";

import { RiAiGenerate } from "react-icons/ri";
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaFileCsv } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

const GenerateTeam = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("Please select a file");
  const [fileU, setFileU] = useState(null);

  const [formDataI, setFormData] = useState({
    designation: "0",
    generations: "10",
    csv_file: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFormData({
        ...formDataI,
        csv_file: selectedFile,
      });

      setFileU(selectedFile);

      setFileName(selectedFile.name);
      console.log(selectedFile);
    }
  };

  console.log(formDataI);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try{
      const formData = new FormData();

      formData.append('csv_file', fileU);

      formData.append('Designation', formDataI.designation);

      formData.append('Number of generations', formDataI.generations);

      const response = await axios.post('http://localhost:5000/api/generateTeam', formData);

      console.log('Response Status Code:', response.status);
      console.log('Response JSON:', response.data);

      if (response.status == 200){
        setLoading(false);

        navigate('/genteam', { state: { responseData: response.data } });
      };

    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error('Error:', error);
    };
  };

  return (
    <div className='hero_container'>
      <div className='form_container'>
        <div className='form__title'>
          <h3>Find Optimal Team</h3>
          <p>use our state-of-the-art technology to get optimal team with lowest Burn out rates</p>
        </div>

        <form onSubmit={handleClick}>
          <div className='form-group'>
            <label htmlFor='designation'>Designation</label>
            <select name='designation' onChange={handleChange}>
              <option value="0">Seniority level 1</option>
              <option value="1">Seniority level 2</option>
              <option value="2">Seniority level 3</option>
              <option value="3">Seniority level 4</option>
              <option value="4">Seniority level 5</option>
              <option value="5">Seniority level 6</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='generations'>No.of Generations</label>
            <select name='generations' onChange={handleChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
            </select>
          </div>

          {/* File uploder */}
          <div className='file_conatainer'
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input 
              type='file' 
              accept='.csv, .xlsx'
              className='input-field' 
              hidden
              onChange={handleFileChange}
            />

            {formDataI.csv_file ? 
              (
                <div className='uploader-text'>
                  <div className='uploader-left'>
                    <FaFileCsv />
                  </div>
                  <div className='uploader-right'>
                    <p>{fileName} - uploaded</p>
                    <span><FaRegCheckCircle /></span>
                  </div>
                </div>
              )
              :
              (
                <div className='uploader-input'>
                    <span><IoCloudUploadSharp /></span>
                    <p>Click here to upload your file</p>
                </div>
              )
            }
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