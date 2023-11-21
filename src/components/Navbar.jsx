import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
function Navbar() {


   const storedFormData = localStorage.getItem('formData');
   const outdata= (JSON.parse(storedFormData))


 


 return (
  <div>
   <div className="navbar-head">
    <div className="ul-list">
    <ul className="nav-link text-light">
    <Link class="navbar-brand" href="#">
      <img src={require("../img/man.png")} alt="Profile" className='profile-img ms-auto  mb-2 d-flex me-auto  '/><p className='text-center p-0 m-0 fw-bold'>{outdata[0].name}</p>
    </Link>
     <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle nav-link-list" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       HOMEPAGES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <ul class="dropdown-menu">
       <li><Link class="dropdown-item active" href="#">Action</Link></li>
       <li><Link class="dropdown-item" href="#">Another action</Link></li>
       <li><Link class="dropdown-item" href="#">Something else here</Link></li>
      </ul>
      </li>
      <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       BLOG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <ul class="dropdown-menu">
       <li><Link class="dropdown-item active" href="#">Action</Link></li>
       <li><Link class="dropdown-item" href="#">Another action</Link></li>
       <li><Link class="dropdown-item" href="#">Something else here</Link></li>
      </ul>
      </li>
      <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       POSTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <ul class="dropdown-menu">
       <li><Link class="dropdown-item active" href="#">Action</Link></li>
       <li><Link class="dropdown-item" href="#">Another action</Link></li>
       <li><Link class="dropdown-item" href="#">Something else here</Link></li>
      </ul>
      </li>
      <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       PAGES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <ul class="dropdown-menu">
       <li><Link class="dropdown-item active" href="#">Action</Link></li>
       <li><Link class="dropdown-item" href="#">Another action</Link></li>
       <li><Link class="dropdown-item" href="#">Something else here</Link></li>
      </ul>
      </li>
      <li class="nav-item">
       <Link to={'/contact'} className='nav-link'>CONTACT US</Link>
      </li>
    </ul>
   </div>
   </div>
  </div>
 )
}

export default Navbar
