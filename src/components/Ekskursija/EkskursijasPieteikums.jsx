import React, { useState } from 'react'
import './styleEx.css'
import { CssBaseline } from '@material-ui/core';
import emailjs from '@emailjs/browser';

const Result = () => {
  return alert("Tavs pieteikums ir saņemts :)");
}

const EkskursijasPieteikums = () => {

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9rqo8r', 'template_q3vtgd8', e.target, 'lSyOB6tpgDbYbDOIJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true);
    }

  return (
<>
  <CssBaseline />
    <div className='container mt-5 mb-5 text-align-center w-70 ex-input'>
      <h1 className='text-center mb-5'>Piesaki ekskursiju!</h1>
      <form className='row g-3' action='' onSubmit={sendEmail}>
        <div className='col-md-6'>
          <label for="vards" className='form-label'>Vārds</label>
          <input className="form-control" type="text" name="vards" required />
        </div>
        <div className='col-md-6'>
          <label for="uzvards" className='form-label'>Uzvārds</label>
          <input className="form-control" type="text" name="uzvards" required />
        </div>
        <div className='col-md-6'>
          <label for="emaiepastslInfo" className='form-label'>E-pasts</label>
          <input className="form-control" type="email" name="epasts" required />
        </div>
        <div className='col-md-6'>
          <label for="telNr" className='form-label'>Telefona nr.</label>
          <input className="form-control" type="text" name="telNr" required />
        </div>
        <div className='col-md-6'>
          <label for="datums" className='form-label'>Vēlamais datums</label>
          <input className="form-control" type="date" min="2023-03-01"  name="datums" required />
        </div>
        <div className='col-md-6 '>
          <label for="viesi" className='form-label'>Viesu skaits (10 - 50)</label>
          <input className="form-control" type="number" name="viesi" min="10" max="50" required />
        </div>
        <div className='col-md-12'>
          <label for="piezimes" className='form-label'>Piezīmes/jautājumi</label>
          <textarea className='form-control' name="piezimes" rows={4}></textarea>
        </div>
        <div className='col-md-12 text-center mt-4'>
          <button type='submit' className='btn btn-success'>Pieteikt ekskursiju</button>
        </div>
        <div>
          {result ? <Result /> : null}
        </div>
      </form>
    </div>
</>

  )
}

export default EkskursijasPieteikums