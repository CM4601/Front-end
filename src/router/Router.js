import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AddEmployee from "../pages/AddEmployee/AddEmployee";
import GenerateTeam from "../pages/GenerateTeam/GenerateTeam";
import DisplayBurnOut from '../pages/DisplayBurnOut/DisplayBurnOut';
import GeneratedTeam from '../pages/GeneratedTeam/GeneratedTeam';

const Router = () => {
  return (
    <Routes>
        <Route
            path="/"
            element={<Navigate to="/generateTeam"/>}
        /> 
        <Route
            path="/generateTeam"
            element={<GenerateTeam/>}
        /> 
        <Route
            path="/addEmployee"
            element={<AddEmployee/>}
        /> 
        <Route
            path="/burnout"
            element={<DisplayBurnOut/>}
        /> 
        <Route
            path="/genteam"
            element={<GeneratedTeam/>}
        /> 
    </Routes>
  )
}

export default Router