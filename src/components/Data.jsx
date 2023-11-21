import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')

      .then(response => response.json())
      .then(data => {
        setData(data);
        // console.log(data);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div >
      <h6>{data?.articles?.[0].title}</h6>


      <img src={data?.articles?.[0].urlToImage} alt="" className='img-fluid' />

      <p>{data?.articles?.[0].description}</p>
      <Link to={data?.articles?.[0].url} className='nav-link text-info-emphasis  '>Click to View </Link>


      <p>{data?.articles?.[0].publishedAt}</p>


      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        View More
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title fs-5" id="exampleModalLabel">{data?.articles?.[0].title}</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img src={data?.articles?.[0].urlToImage} alt="news" className='img-fluid' />
              <p>{data?.articles?.[0].description}</p>

              <Link to={data?.articles?.[0].url} className='nav-link text-info-emphasis  '>Click to View </Link>
              <p>{data?.articles?.[0].content}</p>
            </div>
          </div>
        </div>
      </div>

      <br /><br />


      <h6>{data?.articles?.[20].title}</h6>


      <img src={data?.articles?.[20].urlToImage} alt="" className='img-fluid' />

      <p>{data?.articles?.[20].description}</p>
      <Link to={data?.articles?.[20].url} className='nav-link text-info-emphasis  '>Click to View </Link>


      <p>{data?.articles?.[20].publishedAt}</p>


      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        View More
      </button>

      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title fs-5" id="exampleModalLabel">{data?.articles?.[20].title}</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img src={data?.articles?.[20].urlToImage} alt="news" className='img-fluid' />
              <p>{data?.articles?.[20].description}</p>

              <Link to={data?.articles?.[20].url} className='nav-link text-info-emphasis  '>Click to View </Link>
              <p>{data?.articles?.[20].content}</p>
            </div>
          </div>
        </div>
      </div>


      <br /><br />


      <h6>{data?.articles?.[30].title}</h6>


      <img src={data?.articles?.[30].urlToImage} alt="" className='img-fluid' />

      <p>{data?.articles?.[30].description}</p>
      <Link to={data?.articles?.[30].url} className='nav-link text-info-emphasis  '>Click to View </Link>


      <p>{data?.articles?.[30].publishedAt}</p>


      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
        View More
      </button>

      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title fs-5" id="exampleModalLabel">{data?.articles?.[30].title}</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src={data?.articles?.[30].urlToImage} alt="news" className='img-fluid' />
              <p>{data?.articles?.[30].description}</p>

              <Link to={data?.articles?.[30].url} className='nav-link text-info-emphasis  '>Click to View </Link>
              <p>{data?.articles?.[30].content}</p>
            </div>
          </div>
        </div>
      </div>










    </div>
  );
}

export default Data;
