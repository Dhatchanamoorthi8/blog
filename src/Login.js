import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function Login({ setLoggedIn }) {
 const [storedData, setStoredData] = useState([]);

 useEffect(() => {
  const storedFormData = localStorage.getItem('formData');
  if (storedFormData) {
   setStoredData(JSON.parse(storedFormData));
  }
 }, []);

 const [data, setData] = useState({
  email: '',
  password: ''
 });
 const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();
  const isEmailMatch = storedData.some((formData) => formData.email === data.email && formData.password === data.password);
  const Swal = require('sweetalert2')
  if (isEmailMatch) {
   setLoggedIn(true);
   const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "login in successfully"
  })
   setTimeout(() => {
    navigate('/home')
   }, 1000)

  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Invalid username or password",
      customClass: {
        validationMessage: 'my-validation-message',
      },
      
    })
  }
 };

 return (
  <div>
   <div className="login-head d-flex align-items-center justify-content-center p-5">
   
    <form  className="border rounded shadow p-3 col-12 col-lg-4" onSubmit={handleSubmit}>
    <h4>Login</h4>
     <label htmlFor="email" className="form-label">
      Email
     </label>
     <input
      type="email"
      name="email"
      placeholder='Enter Email'
      className="form-control"
      value={data.email}
      onChange={(e) => setData({ ...data, email: e.target.value })}
     />
     <label htmlFor="password" className="form-label mt-4">
      Password
     </label>
     <input
      type="password"
      name="password"
      placeholder='Enter Password'
      className="form-control"
      value={data.password}
      onChange={(e) => setData({ ...data, password: e.target.value })}
     />
     <button type="submit" className='btn btn-success col-12 login-btn mt-4'>Login</button>
     <Link to="/Register" className="btn btn-outline-dark col-12 mt-3">Create Account</Link>
    </form>
   </div>
  </div>
 );
}

export default Login;
