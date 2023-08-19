import React from 'react'
import './App.css'
import {Profile, AddNewUsers,AllUsers, Dashboard, Signin} from "./componets";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Dashboard />} name="dashboard"/>
            <Route path="/signin" element={<Signin />} name="signin"/>
            <Route path="/profile" element={<Profile />} name="profile"/>
            <Route path="/user-new" element={<AddNewUsers />} name="addnewuser"/>
            <Route path="/users" element={<AllUsers />} name="allusers"/>
            
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
