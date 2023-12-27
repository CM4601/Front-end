import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import errImg from '../../assests/Error.gif';

import "../../styles/Styles.css";

const GeneratedTeam = () => {
  const location = useLocation();

  if (!location.state || !location.state.responseData) {
    return (
      <div className='team_container'>
        <div className='team_table_container'>
          <img src={errImg} alt="error gif"/>

          <h3>No Data Available</h3>
        </div>
      </div>
    )
  }

  // Access the response data from state
  const responseData = location.state.responseData.respone;

  return (
    <div className='team_container'>
      <div className='kpi-container'> 
        <div className='team-kpis'>
          <div className='kpi'>
            <p>Parent Pool Mean Burn Out Rate</p>
            <div className='line'></div>
            <h3>{parseFloat(responseData.mean_parent_scores.toFixed(4))}</h3>
          </div>
          <div className='kpi'>
            <p>Final Pool Mean Burn Out Rate</p>
            <div className='line'></div>
            <h3>{parseFloat(responseData.mean_score.toFixed(4))}</h3>
          </div>
        </div>
      </div>
        <div className='team_table_container'>
        <table className='team_table'>
          <thead>
            <tr>
              <th>Index</th>
              <th>WFH Setup Available</th>
              <th>Mental Fatigue Score</th>
              <th>Resource Allocation</th>
              <th>Burn Out Rate</th>
            </tr>
          </thead>
          <tbody>
            {
              responseData.final_pool.map((team, idx) => {
                return <tr key={idx}>
                    <td>{idx}</td>
                    <td>{team.wfh}</td>
                    <td>{team.fatigue}</td>
                    <td>{team.hours}</td>
                    <td>{team.score}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GeneratedTeam