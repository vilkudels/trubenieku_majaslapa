import React from 'react';
import { CssBaseline } from '@material-ui/core';
import janis from '../../assets/janis.jpg';
import ekskursija from '../../assets/svsenes.jpeg';
import lietotajs from '../../assets/user.png';
import './style.css';

const GalvenaLapa = () => {
  return (
    <>

{/*     <nav className="navbar navbar-light navbar-expand-md fixed-top">
        <div className="container">
        <div className="col-2 pl-md-0 text-left">
            <a href="#top">
            <img src={logo} height={70} alt="image" />
            </a>
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav4"
            aria-controls="navbarNav4"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div
            className="collapse navbar-collapse justify-content-center col-md-8"
            id="navbarNav4"
        >
            <ul className="navbar-nav justify-content-center nav-font">
            <li className="nav-item active">
                <a className="nav-link" href="#">
                PAR MUMS
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                PRODUKTI
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                EKSKURSIJAS
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                KONTAKTI
                </a>
            </li>
            </ul>
        </div>
        <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
            <li className="nav-item">
            <a className="nav-link" href="#">
                <i className="fab fa-facebook" />
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                <i className="fab fa-instagram" />
            </a>
            </li>
        </ul>
        </div>
    </nav> */}
    <section className="pt-5 pb-1 mt-0 align-items-center d-flex fona-attels">
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center text-center d-flex h-100 ">
            <div className="h-50">
            <p className="mb-3 zemnieku-saimnieciba">ZEMNIEKU SAIMNIECĪBA</p>
            <h1 className="text-light mb-2 trubenieki">TRUBENIEKI</h1>
            </div>
        </div>
        </div>
    </section>
    <section className="pt-5">
        <div className="container pb-5 pt-5 text-center">
        <h1 className="pb-5 display-4 fw-bold">Par mums</h1>
        <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-5 pr-md-5 janis">
            <img src={janis} alt="" />
            </div>
            <div className="col-12 col-md-7 pr-md-5 par-mums-font">
            <p className="lead par-mums">
                Zemnieku saimniecība "Trubenieki" ir <b>lielākā</b> šitakī sēņu
                audzētava Latvijā. Saimniecībā visu gadu dabīgi uz koka baļķiem,
                neizmantojot nekādu mēslojumu vai pesticīdus - esam bioloģiskā
                saimniecība.
                <br />
                <br /> Jelgavas novadā, šitaki sēņu audzēšanas izmēģinājuma
                “laboratoriju” ir izveidojis Jānis Volksons. Jānis savu dzimtas
                zemnieku saimniecību “Trubenieki” pārņēmis 2016. gadā, kad
                saimniecības sākotnējā pamatdarbības nozare bija cūkkopība. Līdz tam
                Jānis, jau trīs gadus izmēģinājumu ceļā attīstīja šitaki sēņu
                inkubatoru un audzēšanu, izmantojot savas zināšanas darbā ar apkures
                un ventilācijas sistēmām. Galvenais uzdevums bija panākt vajadzīgo
                klimatu un pareizos apstākļus sēnes augšanai.
                <br />
                <br /> Jo lēnāk sēne aug, jo veidojas brūnāka un skaistāka. Visus
                aprēķinus saimnieks veica pats, jo šajā nozarē konsultanti nav
                pieejami, lielākajā daļā internetā atrodamo materiālu informācija ir
                maldinoša, tāpat pilnībā nevar paļauties arī uz publicētajiem
                zinātniskajiem materiāliem, jo tos nevar piemērot visiem gadījumiem
                un situācijām.
            </p>
            </div>
        </div>
        </div>
    </section>
    <section className="pb-5">
        <div className="container pb-5 pt-5">
        <div className="row align-items-center justify-content-between ">
            <div className="col-12 col-md-5 pr-md-5 ">
            <p className="display-4 fw-bold">Ieskaties Trubenieku ikdienā!</p>
            </div>
            <div className="col-12 col-md-7  mt-4 mt-md-0">
            <div className="ratio ratio-16x9 rounded overflow-hidden">
                <iframe
                className="ratio ratio-16x9"
                src="https://www.youtube.com/embed/JBdtRgWsDHs"
                allowFullScreen=""
                />
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="pt-5 pb-5">
        <div className="container">
        <div className="d-flex align-items-start flex-column">
            <div className="col-12">
            <img
                src={ekskursija}
                alt=""
                className="img-fluid mx-auto d-block"
            />
            </div>
            <div className="col-12">
            <h3 className="mb-2 display-5 fw-bold ">Ekskursija uz Trubeniekiem</h3>
            <p className="lead">
                Saimniecības apmeklējums ir iespējams pavasara, vasaras, rudens
                sezonā no 1. aprīļa līdz 15. novembrim, ar iepriekšēju pieteikšanos.
                <br />
                <br />
                Ekskursijas laikā varēsi:
            </p>
            <ul className="list-features">
                <li>Aplūkot saimniecību</li>
                <li>Pagaršot svaigas sēnes</li>
                <li>Paēst gardāko sēņu zupu</li>
                <li>Iedzert sēņu šņabi</li>
                <li>Uzzināt sēņu audzēšanas noslēpumus</li>
                <li>Iestādīt sēņu micēliju</li>
                <li>Atpūsties svaigā gaisā</li>
            </ul>
            </div>
        </div>
        </div>
    </section>
    <section className="pt-5 pb-5">
        <div className="container text-center">
        <h1 className="pb-5 display-4 fw-bold">Apmeklētāju atsauksmes</h1>
        <div className="row row-grid pt-5">
            <div className="col-xs-12 col-md-4 my-1">
            <img
                alt="image"
                className="img-fluid rounded-circle lietotajs"
                src={lietotajs}
            />
            <p className="text-h3 mt-3">
                "Ļoti patika izsmeļošais stāstījums un atbildes uz neskaitāmiem
                papildjautājumiem. Ļoti garšoja šitaki sēņu sviests ar pašcepto
                maizi, kurā arī bija šitaki sēnes. Un vienreizēja iespēja pašam
                iesēt šitaki sēnes."
            </p>
            <p className="text-h3 mt-4 mt-xl-5">
                <strong>Edīte J.</strong>
            </p>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half" />
            </div>
            <div className="col-xs-12 col-md-4 my-1">
            <img
                alt="image"
                className="img-fluid rounded-circle lietotajs"
                src={lietotajs}
            />
            <p className="text-h3 mt-3">
                "Trubenieku gardumi man bija īstens atklājums - šitaki sēņu
                sviestiņš, maizīte vai kaltētu šitaki sēņu čipsi - veselīga uzkoda,
                kas dod ilgstošu sāta sajūtu. Kvalitatīvi un ļoti baudāmi, noteikti
                iesaku!✨"
            </p>
            <p className="text-h3 mt-4 mt-xl-5">
                <strong>Elfa M.</strong>
            </p>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            </div>
            <div className="col-xs-12 col-md-4 my-1">
            <img
                alt="image"
                className="img-fluid rounded-circle lietotajs"
                src={lietotajs}
            />
            <p className="text-h3 mt-3">
                "Labai įdomi ekskursija, labai smagus šitaki grybų ūkio šeimininkas
                Janis, su gera jumoro doze pasakoja savo verslo etapus. O jau šitaki
                grybų sriubos gardumas, duonos ir šitaki grybų užtepėlės skanumas!"
            </p>
            <p className="text-h3 mt-4 mt-xl-5">
                <strong>Daiva V.</strong>
            </p>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            </div>
        </div>
        </div>
    </section>
    <section className="kajene">
        <footer className="pt-5 pb-3">
        <div className="container">
            <div className="row text-center">
            <div className="col">
                <p className="small">© 2022 Z/S "Trubenieki"</p>
            </div>
            </div>
        </div>
        </footer>
    </section>
    </>

  )
}

export default GalvenaLapa