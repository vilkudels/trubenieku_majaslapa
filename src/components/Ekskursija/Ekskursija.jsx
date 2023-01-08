import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import janis from '../../assets/janis.jpg';
import ekskursija1 from '../../assets/ex1.jpeg';
import ekskursija2 from '../../assets/senuzupa.png';
import ekskursija3 from '../../assets/ekskursija4.jpeg';
import lietotajs from '../../assets/user.png';
import './style.css';
import EkskursijasPieteikums from './EkskursijasPieteikums';

const Ekskursija = () => {


  return (

    
<>
<div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">

<Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#hero-carousel"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#hero-carousel"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#hero-carousel"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active c-item">
      <img
        src={ekskursija1}
        className="d-block w-100 c-img"
        alt="Slide 1"
      />
      <div className="carousel-caption top-0 mt-5">
        <p className="mt-5 fs-3 text-uppercase">Uzzini šitakī sēņu audzēšanas noslēpumus</p>
        <h1 className="display-1 fw-bolder text-capitalize">
          Ekskursija uz Trubeniekiem
        </h1>
        <a href="#pieteikuma-forma">
        <button className="btn btn-success w-50 p-3 fs-5 mt-5">
          Pieteikties
        </button>
        </a>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img
        src={ekskursija2}
        className="d-block w-100 c-img"
        alt="Slide 2"
      />
      <div className="carousel-caption top-0 mt-5">
        <p className="text-uppercase fs-3 mt-5">Visgardākā šitakī sēņu zupa</p>
        <p className="display-1 fw-bolder text-capitalize">Ekskursija uz Trubeniekiem</p>
        <a href="#pieteikuma-forma">
        <button className="btn btn-success w-50 p-3 fs-5 mt-5">
          Pieteikties
        </button>
        </a>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img
        src={ekskursija3}
        className="d-block w-100 c-img"
        alt="Slide 3"
      />
      <div className="carousel-caption top-0 mt-5">
        <p className="text-uppercase fs-3 mt-5">Nogaršo sēņu šņabi</p>
        <p className="display-1 fw-bolder text-capitalize">Ekskursija uz Trubeniekiem</p>
        <a href="#pieteikuma-forma">
        <button className="btn btn-success w-50 p-3 fs-5 mt-5">
          Pieteikties
        </button>
        </a>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#hero-carousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#hero-carousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
    
  </div>
    <div id='pieteikuma-forma'>
    <EkskursijasPieteikums />
    </div>
  </>




  
/* 
  <section className="fons-ex">
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
      />
      <li
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        className=""
      />
      <li
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        className=""
      />
    </ol>
    <div className="carousel-inner fons-slide">
      <div className="carousel-item active">
      <div className="container">
        <div className="carousel-caption d-none d-md-block">
          <h1>Dodies ekskurijā uz Trubeniekiem!</h1>
          <h3>Nogaršo sēņu šņabi</h3>
        </div>
        </div>
        <img
          className="d-block  w-100"
          src={ekskursija3}
          data-holder-rendered="true"
        />
        <div className="container">
        <div className="carousel-caption d-none d-md-block">
          <h1>Dodies ekskurijā uz Trubeniekiem!</h1>
          <h3>Nogaršo sēņu šņabi</h3>
        </div>
        </div>

      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src={ekskursija2}
          data-holder-rendered="true"
        />
        <div className="carousel-caption d-none d-md-block">
        <h1>Dodies ekskurijā uz Trubeniekiem!</h1>
          <h3>Pagaršo gardu sēņu zupu</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src={ekskursija1}
          data-holder-rendered="true"
        />
        <div className="carousel-caption d-none d-md-block">
        <h1>Dodies ekskurijā uz Trubeniekiem!</h1>
          <h3>Iepazīsti sēņu audzēšanas procesus</h3>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
    </a>
  </div>
  </section> */

  )
}

export default Ekskursija