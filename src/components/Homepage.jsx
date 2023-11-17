import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Data from './Data'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Homepage({ onLogout }) {
  const [data, setData] = useState();
  const [activeCategory, setActiveCategory] = useState('technology');

  const [urls, seturl] = useState('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')


  useEffect(() => {
    fetch(urls)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, [urls]);


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
        <div className="col-md-2 col-lg-2 col-6 p-0 border d-lg-flex d-md-flex d-none">
          <Navbar onLogout={handleLogout} />
        </div>





        <div className="col-lg-9 col-12 blog-body d-inline-flex mt-5 p-3">


          <div className="col-12 col-lg-9 d-flex flex-wrap gap-4 p-0 mt-lg-0 mt-5 mt-md-0">


            <div className="card col-12 col-lg-5 p-0 mt-5 mt-lg-0 mt-md-0 ">
              <div className="card-body ">
                <h6>{data?.articles?.[5].title}</h6>
                <img src={data?.articles?.[5].urlToImage} alt="news" className='img-fluid' />
                <p>{data?.articles?.[5].description}</p>

                <Link to={data?.articles?.[5]?.url} className='nav-link text-info-emphasis  '>Click to View </Link>
                <button type="button" class="btn btn-outline-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  View More
                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h6 class="modal-title fs-5" id="staticBackdropLabel"> {data?.articles?.[5].title}</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                        <p className="card-title "></p>
                        <img src={data?.articles?.[5].urlToImage} alt="news" className='img-fluid' />
                        <p>{data?.articles?.[5].description}</p>

                        <Link to={data?.articles?.[5].url} className='nav-link text-info-emphasis  '>Click to View </Link>
                        <p>{data?.articles?.[5].content}</p>
                      </div>
                    </div>
                  </div>
                </div>


                <p>{data?.articles?.[5].publishedAt}</p>
              </div>
            </div>



            <div className="card col-12 col-lg-6 p-0">
              <div className="card-body">
                <h6>{data?.articles?.[1].title}</h6>
                <img src={data?.articles?.[1].urlToImage} alt="news" className='img-fluid' />
                <p>{data?.articles?.[1].description}</p>
                <Link to={data?.articles?.[1].url} className='nav-link text-info-emphasis  '>Click to View </Link>

                <button type="button" class="btn btn-outline-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
         View More
        </button>

        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
            <h6 class="modal-title fs-5" id="staticBackdropLabel"> {data?.articles?.[1].title}</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">

           <p className="card-title "></p>
        <img src={data?.articles?.[1].urlToImage} alt="news" className='img-fluid' />
        <p>{data?.articles?.[1].description}</p>

        <Link to={data?.articles?.[1].url} className='nav-link text-info-emphasis  '>Click to View </Link>
            <p>{data?.articles?.[1].content}</p>
           </div>
          </div>
         </div>
        </div>
                <p>{data?.articles?.[1].publishedAt}</p>
              </div>
            </div>



            <div className="card col-12 col-lg-5 ">
              <div className="card-body">
                <h6>{data?.articles?.[4].title}</h6>
                <img src={data?.articles?.[4].urlToImage} alt="news" className='img-fluid' />
                <p>{data?.articles?.[4].description}</p>
                <Link to={data?.articles?.[4].url} className='nav-link text-info-emphasis  '>Click to View </Link>
                <button type="button" class="btn btn-outline-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
         View More
        </button>

        <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
            <h6 class="modal-title fs-5" id="staticBackdropLabel"> {data?.articles?.[4].title}</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">

           <p className="card-title "></p>
        <img src={data?.articles?.[4].urlToImage} alt="news" className='img-fluid' />
        <p>{data?.articles?.[4].description}</p>

        <Link to={data?.articles?.[4].url} className='nav-link text-info-emphasis  '>Click to View </Link>
            <p>{data?.articles?.[4].content}</p>
           </div>
          </div>
         </div>
        </div>
                <p>{data?.articles?.[4].publishedAt}</p>
              </div>
            </div>



            <div className="card col-12 col-lg-6 p-0">
              <div className="card-body">
                <h6>{data?.articles?.[8].title}</h6>
                <img src={data?.articles?.[8].urlToImage} alt="news" className='img-fluid' />
                <p>{data?.articles?.[8].description}</p>
                <Link to={data?.articles?.[8].url} className='nav-link text-info-emphasis  '>Click to View </Link>

                <button type="button" class="btn btn-outline-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
         View More
        </button>

        <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
            <h6 class="modal-title fs-5" id="staticBackdropLabel"> {data?.articles?.[8].title}</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">

           <p className="card-title "></p>
        <img src={data?.articles?.[8].urlToImage} alt="news" className='img-fluid' />
        <p>{data?.articles?.[8].description}</p>

        <Link to={data?.articles?.[8].url} className='nav-link text-info-emphasis  '>Click to View </Link>
            <p>{data?.articles?.[8].content}</p>
           </div>
          </div>
         </div>
        </div>


                <p className='pt-2'>{data?.articles?.[8].publishedAt}</p>
              </div>
            </div>

            <div className="card col-12 col-lg-5 p-0">
              <div className="card-body">
                <h6>{data?.articles?.[16].title}</h6>
                <img src={data?.articles?.[16].urlToImage} alt="news" className='img-fluid' />
                <p>{data?.articles?.[16].description}</p>
                <Link to={data?.articles?.[16].url} className='nav-link text-info-emphasis  '>Click to View </Link>

                <button type="button" class="btn btn-outline-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">
         View More
        </button>

        <div class="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
            <h6 class="modal-title fs-5" id="staticBackdropLabel"> {data?.articles?.[16].title}</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">

           <p className="card-title "></p>
        <img src={data?.articles?.[16].urlToImage} alt="news" className='img-fluid' />
        <p>{data?.articles?.[16].description}</p>

        <Link to={data?.articles?.[16].url} className='nav-link text-info-emphasis  '>Click to View </Link>
            <p>{data?.articles?.[16].content}</p>
           </div>
          </div>
         </div>
        </div>


                <p className='pt-2'>{data?.articles?.[8].publishedAt}</p>
              </div>
            </div>
            <div className="card col-12 col-lg-6 p-0">
              <div className="card-body">
                <h6>{data?.articles?.[14].title}</h6>
                <img src={data?.articles?.[14].urlToImage} alt="news" className='img-fluid' />
                <p>{data?.articles?.[14].description}</p>
                <Link to={data?.articles?.[14].url} className='nav-link text-info-emphasis  '>Click to View </Link>

                <button type="button" class="btn btn-outline-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop6">
         View More
        </button>

        <div class="modal fade" id="staticBackdrop6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
          <div class="modal-content">
           <div class="modal-header">
            <h6 class="modal-title fs-5" id="staticBackdropLabel"> {data?.articles?.[14].title}</h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
        <img src={data?.articles?.[14].urlToImage} alt="news" className='img-fluid' />
        <p>{data?.articles?.[14].description}</p>

        <Link to={data?.articles?.[14].url} className='nav-link text-info-emphasis  '>Click to View </Link>
            <p>{data?.articles?.[14].content}</p>
           </div>
          </div>
         </div>
        </div>


                <p className='pt-2'>{data?.articles?.[8].publishedAt}</p>
              </div>
            </div>



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