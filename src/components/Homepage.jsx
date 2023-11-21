import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Data from './Data'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';
import Pagination from './Pagination';


function Homepage({ onLogout }) {
  const [data, setData] = useState();
  const [activeCategory, setActiveCategory] = useState('technology');

  const [urls, seturl] = useState('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')


  useEffect(() => {
    fetch(urls)
      .then(response => response.json())
      .then(data => {
        setData(data.articles);

      })
      .catch(error => {
        console.log(error);
      });
  }, [urls]);
  console.log(data);



  // axios({
  //   method: 'GET',
  //   url: 'https://indian-news1.p.rapidapi.com/indianNews',
  //   headers: {
  //     'X-RapidAPI-Key': 'e4d1954313msh70df0f5a426b482p1cb181jsnd423b01ddb75',
  //     'X-RapidAPI-Host': 'indian-news1.p.rapidapi.com'
  //   }
  // })
  //   .then(function (response) {
  //     console.log(response.data)
  //   });

  const handleLogout = () => {
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
      title: "logout successfully"
    })
    setTimeout(() => {
      onLogout();
    }, 100);


  };

  const [show, setshow] = useState('')
  const [navshow, setnavshow] = useState(false)

  const btn_clicked = () => {
    setshow(show === '' ? <Navbar /> : "")
    setnavshow(!navshow)
  }






  const technologyClick = () => {
    seturl('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
    setActiveCategory('technology');
  };

  const sportclick = (e) => {
    seturl('https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json');
    setActiveCategory('sports');

  };
  const scienceclick = () => {
    seturl('https://saurav.tech/NewsAPI/top-headlines/category/science/in.json')
    setActiveCategory('science');
  }

  const businessclick = () => {
    seturl('https://saurav.tech/NewsAPI/top-headlines/category/business/in.json')
    setActiveCategory('business');
  }

  return (
    <div>
      <div className="row m-0 p-0 d-inline-flex ">
        {/* Nvabr start */}
        <div className="col-md-2 col-lg-2 col-6 p-0 border d-lg-flex d-md-flex d-none">
          <Navbar />
        </div>
        {/* Nvabr End */}

        <div className="col-lg-9 col-12 blog-body d-inline-flex mt-5 p-3">
          <div className="col-12 col-lg-9 d-flex flex-wrap gap-4 p-0 mt-lg-0 mt-5 mt-md-0">

            {/* CARD -1 */}
            {data?.map((datas, index) => {
              return <div className="card col-12 col-lg-5 p-0 mt-5">
                <div className="card-body">
                  <h6>{datas.author}</h6>
                  <img src={datas.urlToImage} alt="news" className='img-fluid' />
                  <p>{datas.description}</p>
                  <Link to={datas.url} className='nav-link text-info-emphasis  '>Click to View </Link>
                  <p className='pt-2'>{ }</p>
                  <button type="button" class="btn btn-outline-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target={index}>
                    View More
                  </button>
                  <div class="modal fade" id={index} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h6 class="modal-title fs-5" id="staticBackdropLabel"> {datas.title}</h6>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src={datas.urlToImage} alt="news" className='img-fluid' />
                          <p>{data.description}</p>

                          <Link to={datas.url} className='nav-link text-info-emphasis  '>Click to View </Link>
                          <p>{datas.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
            <Pagination />

          </div>
          <div className="col-12 col-lg-4 p-1 d-lg-inline-block search-bar">

            <button className={`btn btn-outline-dark me-2 mb-2 ${activeCategory === 'technology' ? 'active' : ''}`}
              onClick={technologyClick}
            >Technology</button>

            <button
              className={`btn btn-outline-dark me-2 mb-2 ${activeCategory === 'sports' ? 'active' : ''}`}
              onClick={sportclick}>
              Sports
            </button>
            <button
              className={`btn btn-outline-dark me-2 mb-2 ${activeCategory === 'science' ? 'active' : ''}`}
              onClick={scienceclick}>
              Science</button>
            <button
              className={`btn btn-outline-dark me-2 mb-2 ${activeCategory === 'business' ? 'active' : ''}`}
              onClick={businessclick}>Business</button>


            <button className="btn btn-danger logout-btn ms-lg-0 me-2 mb-2" onClick={handleLogout}>Logout</button>
            <div className="menu-btn mt-1 mb-1 d-lg-none">
              <button
                onClick={btn_clicked}
                className={`btn btn-outline-dark d-lg-none  ${navshow === true ? ' d-flex' : ''}`}>
                <img src={require('../img/menu.png')} alt="" height={20} wegith={20} />
              </button>
              {show && <Navbar />}
            </div>
            <input
              type="search"
              name="search"
              className='search-post col-12 ' />
            <div className="card d-none d-lg-inline-block ">
              <div className="card-body ">
                <Data />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage