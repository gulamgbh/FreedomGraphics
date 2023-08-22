import React, { useEffect } from 'react'
import './App.css'
import { Profile, AddNewUsers, AllUsers, Dashboard, Protected, Signin } from "./componets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './redux/action/adminAuth';

function App() {
  const Admin_Details = useSelector(state => state.adminAuth);
  const dispatch = useDispatch()
  useEffect(() => {
    if (!Admin_Details.authenticate) {
      dispatch(isUserLoggedIn());
    }
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Protected />}>
            <Route exact path="/" element={<Dashboard />} name="dashboard" />
            <Route path="/profile" element={<Profile />} name="profile" />
            <Route path="/user-new" element={<AddNewUsers />} name="addnewuser" />
            <Route path="/users" element={<AllUsers />} name="allusers" />
          </Route>
          <Route path="/signin" element={<Signin />} name="signin" />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
