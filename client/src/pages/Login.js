 
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../actions/authAction';

import socket from '../socket';
import ('../stylelogin.css')


const Login = () => {
    useEffect(() => {
    socket.disconnect()
    socket.close()
   
  }, [])
  

    const [input, setInput] = useState({
      email :'',
      password :'',
    });
    const errors = useSelector(state => state.authReducer.errors)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleChange = (e) => {
      setInput({...input,[e.target.name]:e.target.value});
    }
    
    const handleSubmit = (e) => {
      e.preventDefault(); 
      dispatch(loginUser(input,history))
    
    }
    return (
        <div className="body">
         <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square"/></span>
                <span><i className="fab fa-google-plus-square" /></span>
                <span><i className="fab fa-twitter-square" /></span>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                  </div>
                  <input type="text" className="form-control" name="email" placeholder="username" onChange={(e)=>handleChange(e)} />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="form-control" name="password" placeholder="password" onChange={(e)=>handleChange(e)} />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
                </div>
                <div className="form-group">
                  <input type="submit"  defaultValue="Login" className="btn float-right login_btn" onClick={(e)=>handleSubmit(e)} />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="/">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Login  

