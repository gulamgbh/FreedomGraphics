import React, { useEffect, useState } from 'react'
import { FormButtonModule, FormInputModule, FormLabelModule } from '../commonComponents/form.module'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, isUserLoggedIn } from '../../redux/action/adminAuth'
import { useNavigate } from "react-router-dom";
const Signin = () => {
    const Admin_Details = useSelector(state => state.adminAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [_password, setPassword] = useState("")
    useEffect(() => {
        if (!Admin_Details.authenticate) {
          dispatch(isUserLoggedIn());
        }
      }, [])
    const adminLoginData = async (e) => {
        e.preventDefault();
        const admin_Login_Data = {
            email,
            _password
        }
        dispatch(adminLogin(admin_Login_Data))
    }
    useEffect(() => {
        if (!Admin_Details.authenticate) {
          dispatch(isUserLoggedIn());
        }
      }, [])
    if (Admin_Details.authenticate) {
        return navigate("/");
      }
    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <form onSubmit={adminLoginData}>
                                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                    <div className="card-body p-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
                                            <p className="text-danger fw-bold mb-5">{Admin_Details.message==null?Admin_Details.error:Admin_Details.message}</p>
                                            <div className="form-outline form-white mb-4">
                                                <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} />
                                                <FormLabelModule cn="form-label" title="Email" />
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <FormInputModule typ="password" nm="password" val={_password} cn="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                                                <FormLabelModule cn="form-label" title="Password" />
                                            </div>
                                            <FormButtonModule cn="btn btn-outline-light btn-lg px-5" typ="submit" btntitle="Login" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin

{/* <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div> */}
{/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div> */}
{/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */ }
