import React, { useState } from 'react'
import Layout from '../../../layout/Layout'
import { FormButtonModule, FormInputModule, FormLabelModule } from '../../../commonComponents/form.module'
import { useDispatch } from 'react-redux';
import { registerAdminUser } from '../../../../redux/action/adminAuth';
var randomstring = require("randomstring");


const AddNewUsers = () => {
  const [email, setEmail] = useState("")
  const [first_name, setFirstname] = useState("")
  const [last_name, setLastname] = useState("")
  const [role, setRole] = useState("")
  const [_password, setPassword] = useState(randomstring.generate({ length: 12 }))
  const dispatch = useDispatch()

  const creatAdminUser = async (e) => {
    e.preventDefault();
    const createUserData = {
      email,
      _password,
      first_name,
      last_name,
      role
    }
    dispatch(registerAdminUser(createUserData))
  }
  return (

    <Layout>

      <div class="container-fluid">
        <div class="card o-hidden border-0 shadow-lg">
          <div class="card-body p-0">
            <div class="row">
              <div class="p-1 bg-dark">
                <div className='container-fluid'>
                  <div class="text-center">
                    <h2 className="fw-bold mt-5 text-uppercase text-white">Create User</h2>
                    <p className="text-danger fw-bold">abcd</p>
                  </div>
                  <form onSubmit={creatAdminUser} >
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3">
                        <FormLabelModule cn="form-label text-white" title="First Name" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={first_name} onChange={e => setFirstname(e.target.value)} />
                      </div>
                      <div class="col-sm-6 mb-3 ">
                        <FormLabelModule cn="form-label text-white" title="Last Name" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={last_name} onChange={e => setLastname(e.target.value)} />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-12 mb-3">
                        <FormLabelModule cn="form-label text-white" title="Email" />
                        <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3">
                        <FormLabelModule cn="form-label text-white" title="Password" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={_password} onChange={e => setPassword(e.target.value)} />
                      </div>
                      <div class="col-sm-6">
                        <FormLabelModule cn="form-label text-white" title="Role" />
                        <FormInputModule typ="text" cn="form-control form-control-lg" val={role} onChange={e => setRole(e.target.value)} />
                      </div>
                    </div>
                    <div className='my-4'>
                      <FormButtonModule cn="btn btn-outline-light btn-lg px-5" typ="submit" btntitle="Add New User" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddNewUsers