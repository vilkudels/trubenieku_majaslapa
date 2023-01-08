import React from 'react';
import { Helmet } from "react-helmet";
import { CssBaseline } from '@material-ui/core';
import janis from '../../assets/janis.jpg';
import ekskursija from '../../assets/ekskursija2.jpg';
import lietotajs from '../../assets/user.png';
import { Star, StarHalf, StarBorder, StarOutline } from '@material-ui/icons';
import './style.css';

const GalvenaLapa = () => {
  return (
    <>
    <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
    <section className="pt-5 pb-1 mt-0 align-items-center d-flex fona-attels">
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center text-center d-flex h-100 ">
            <div className="h-50">
            <p className="mb-3 zemnieku-saimnieciba">ZEMNIEKU SAIMNIECĪBA</p>
            <h1 className="display-1 fw-bolder text-capitalize trubenieki">
          TRUBENIEKI
        </h1>
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
            <div className="col-12 col-md-7 pr-md-5 par-mums-font trub-ikdiena">
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
            <div className="col-12 col-md-5 pr-md-5 trub-ikdiena">
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
    <section className="pt-5">
        <div className="container text-center">
        <h1 className="pb-5 display-4 fw-bold">Apmeklētāju atsauksmes</h1>
        <div className="row row-grid">
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
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
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
            <Star />
            <Star />
            <Star />
            <Star />
            <StarHalf />
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
            <Star />
            <Star />
            <Star />
            <Star />
            <StarOutline />
            </div>
        </div>
        </div>
    </section>
    <section className="kajene">
        <footer className="pt-5 pb-3">
        <div className="container">
            <div className="row text-center">
            <div className="col">
                <p className="small">© 2023 Z/S "Trubenieki"</p>
            </div>
            </div>
        </div>
        </footer>
    </section>
    </>

  )
}

export default GalvenaLapa