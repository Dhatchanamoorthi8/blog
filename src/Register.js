import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Register() {
  const [data, setData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const [formDataArray, setFormDataArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormDataArray(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formDataArray));
  }, [formDataArray]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormDataArray([...formDataArray, data]);
    setData({ name: '', password: '', email: '' });
    Swal.fire({
      title: 'Success',
      text: 'Your account Register Successfully',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000
    })

    setTimeout(() => {
      navigate('/');
    },2000);
  };


  return (
    <div>
      <div className="login-head d-flex align-items-center justify-content-center p-5">
        <form action="" className="border rounded shadow p-3 col-12 col-lg-4" onSubmit={handleSubmit}>
        <h4>Create Your Account</h4>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={data.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={data.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={data.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className='btn btn-success mt-4 col-12'>Create Account</button>
        </form>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Register;
