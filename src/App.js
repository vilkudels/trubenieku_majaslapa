import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Produkti, Navigacija, Grozs, Pasutijums, GalvenaLapa, Ekskursija, Kontakti } from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  const [produkti, uzstaditProduktus] = useState([]);
  const [grozs, uzstaditGrozu] = useState([]);
  const [pasutijums, uzstaditPasutijumu] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const paraditVisusProduktus = async () => {
      const { data } = await commerce.products.list();

      uzstaditProduktus(data);
  }

  const paraditGrozu = async () => {
    
        uzstaditGrozu(await commerce.cart.retrieve()) 
  
}

  const nodrosinatPievienosanuGrozam = async (produktaId, quantity) => {
      
        uzstaditGrozu(await commerce.cart.add(produktaId, quantity));

  }

  const nodrosinatProduktuSkaitaAtjaunosanos = async (produktaId, quantity) => {

        uzstaditGrozu(await commerce.cart.update(produktaId, { quantity }));

  }

  const nodrosinatIznemsanuNoGroza = async (produktaId) => {

        uzstaditGrozu(await commerce.cart.remove(produktaId));

  }

  const nodrosinatGrozaIztuksosanu = async () => {

        uzstaditGrozu(await commerce.cart.empty());
        
  }

  const atsvaidzinatGrozu = async () => {
    const jaunsGrozs = await commerce.cart.refresh();

    uzstaditGrozu(jaunsGrozs);
  }

  const nodrosinatPasutijumaSaksanu = async (markieraId, jaunsPasutijums) => {
      try {
          const ienakosaisPasutijums = await commerce.checkout.capture(markieraId, jaunsPasutijums);

          uzstaditPasutijumu(ienakosaisPasutijums);
          atsvaidzinatGrozu();
      } catch (error) {
          setErrorMessage(error.data.error.message);
      }

  }


  useEffect(() => {
      paraditVisusProduktus();
      paraditGrozu();
  }, []);

  return (
    <Router>
        <div>
            <Navigacija totalItems={grozs.total_items} />
            <Routes>
                <Route exact path="/" element={<Produkti 
                                                produkti={produkti} 
                                                nodrosinatPievienosanuGrozam={nodrosinatPievienosanuGrozam} />} 
                                                />
                <Route exact path="/grozs" element={<Grozs 
                                                    grozs={grozs}
                                                    atjaunojotProduktuSkaitu={nodrosinatProduktuSkaitaAtjaunosanos} 
                                                    iznemotNoGroza={nodrosinatIznemsanuNoGroza} 
                                                    iztuksojotVisuGrozu={nodrosinatGrozaIztuksosanu} />} 
                                                    />
                <Route exact path="/pasutijums" element={<Pasutijums 
                                                        grozs={grozs}
                                                        pasutijums={pasutijums}
                                                        nodrosinatPasutijumaSaksanu={nodrosinatPasutijumaSaksanu}
                                                        error={errorMessage} />}
                                                        />
                <Route exact path='/home' element={<GalvenaLapa />} />
                <Route exact path='/ekskursija' element={<Ekskursija />} />
                <Route exact path='/kontakti' element={<Kontakti />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App;