import React from 'react'
import './style.css';
import { Facebook, Instagram, Phone, LocationOn, Check, Email } from '@material-ui/icons';
import { Helmet } from "react-helmet";

const Kontakti = () => {
  return (
    
    <section className="pb-5">
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-8 col-lg-7">
        <h1 className="pb-3 display-4 fw-bold">Kā mūs atrast?</h1>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-12 col-md-6">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8816.373800578034!2d23.6167884!3d56.4661511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1f1c4fe5f82e4e!2sTrubenieki%20ZS!5e0!3m2!1slv!2slv!4v1673180591257!5m2!1slv!2slv"
            width="100%"
            height={400}
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
        <div className="col-12 col-md-6 pt-5 pt-md-0 kontakti">
          <form>
            <div className="row">
              <div className="col">
              <Email className='ikona' />
                <a href="mailto:info@trubenieki.lv">info@trubenieki.lv</a>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex">
              <Phone className='ikona' />
                <a href="tel:+37126137777">+37126137777</a>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex">
                <Facebook className='ikona' />
                  <a href="https://www.facebook.com/trubenieki/">Facebook</a>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex">
                <Instagram className='ikona' />
                  <a href="https://www.instagram.com/trubenieki/">Instagram</a>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex">
                <LocationOn className='ikona' />
                Jelgavas novads, Lielplatones pagasts, Trubenieki
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex">
                <Check className='ikona' />
                Reģ.Nr.: 43601019778
              </div>
            </div>
            <div className="row mt-4">
              <div className="col d-flex">
                <Check className='ikona' />
                PVD numurs: 071742
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Kontakti