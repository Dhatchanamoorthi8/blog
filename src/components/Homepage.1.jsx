import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Data from './Data';
import { Link } from 'react-router-dom';

export function Homepage() {
 const [data, setData] = useState();
 const [activeCategory, setActiveCategory] = useState('technology');

 const [urls, seturl] = useState('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=08913ba63ac540d28f22d4b69df8c77b');


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



 const technologyClick = () => {
  seturl('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=08913ba63ac540d28f22d4b69df8c77b');
  setActiveCategory('technology');
 };

 const sportclick = (e) => {
  seturl('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=08913ba63ac540d28f22d4b69df8c77b');
  setActiveCategory('sports');

 };
 const scienceclick = () => {
  seturl('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=08913ba63ac540d28f22d4b69df8c77b');
  setActiveCategory('science');
 };


 const [searchQuery, setSearchQuery] = useState('');

 const filteredArticles = (data?.articles || []).filter((value) => value.title.toLowerCase().includes(searchQuery.toLowerCase())
 );

 const handleSearch = (e) => {
  setSearchQuery(e.target.value);
 };


 return (
  <div>
   <div className="row m-0 p-0 d-inline-flex ">

    <div className="col-md-2 col-lg-2 col-6 p-0 border d-lg-flex d-md-flex d-none">
     <Navbar />
    </div>

    <div className="col-lg-9 col-12 blog-body d-inline-flex mt-5 p-3">
     <div className="col-12 col-lg-9 d-flex flex-wrap gap-4 p-0">

      {filteredArticles.map((articles, index) => (

       <div className="card col-12 col-lg-5 p-0">
        <div className="card-body ">
         <p>{data?.articles?.[5].title}</p>
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
             <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

             <p className="card-title ">{data?.articles?.[5].title}</p>
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
       </div>, <div className="card col-12 col-lg-6 p-0">
        <div className="card-body">
         <p className="card-title ">{data?.articles?.[1].title}</p>
         <img src={data?.articles?.[1].urlToImage} alt="news" className='img-fluid' />
         <p>{data?.articles?.[1].description}</p>
         <Link to={data?.articles?.[1].url} className='nav-link text-info-emphasis  '>Click to View </Link>
         <p>{data?.articles?.[1].publishedAt}</p>
        </div>
       </div>, <div className="card col-12 col-lg-5">
        <div className="card-body">
         <img src={data?.articles?.[4].urlToImage} alt="news" className='img-fluid' />
         <p>{data?.articles?.[4].description}</p>
         <Link to={data?.articles?.[4].url} className='nav-link text-info-emphasis  '>Click to View </Link>
         <p>{data?.articles?.[4].publishedAt}</p>
        </div>
       </div>, <div className="card col-12 col-lg-6 p-0">
        <div className="card-body">
         <img src={data?.articles?.[3].urlToImage} alt="news" className='img-fluid' />
         <p>{data?.articles?.[3].description}</p>
         <Link to={data?.articles?.[3].url} className='nav-link text-info-emphasis  '>Click to View </Link>
         <p className='pt-2'>{data?.articles?.[3].publishedAt}</p>
        </div>
       </div>
      ))}
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
      <input
       type="search"
       name="search"
       value={searchQuery}
       onChange={handleSearch}
       className='search-post col-12' />
      <div className="card d-none d-lg-inline-block ">
       <div className="card-body ">
        <Data />
       </div>
      </div>
     </div>
    </div>

   </div>
  </div>
 );
}
