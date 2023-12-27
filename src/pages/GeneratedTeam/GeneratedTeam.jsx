import React, { useState } from 'react';
import team_data from '../../data/data';

import "../../styles/Styles.css";

const GeneratedTeam = () => {
  return (
    <div className='team_container'>
        <div className='team_table_container'>
        <table className='team_table'>
          <thead>
            <tr>
              <th>Index</th>
              <th>WFH Setup Available</th>
              <th>Resource Allocation</th>
              <th>Mental Fatigue Score</th>
            </tr>
          </thead>
          <tbody>
            {
              team_data.map((team, idx) => {
                return <tr key={idx}>
                    <td>{idx}</td>
                    <td>{team[0]}</td>
                    <td>{team[1]}</td>
                    <td>{team[2]}</td>
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