import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import Ievadlauki from './PashaAizpildamieLauki';

const AdresesIevadforma = ({ pasutijumaMarkieris, test }) => {
  const [piegadesValstis, paraditPiegadesValstis] = useState([]);
  const [piegadesValsts, paraditPiegadesValsti] = useState('');
  const [piegadesNovadi, paraditPiegadesNovadus] = useState([]);
  const [piegadesNovads, paraditPiegadesNovadu] = useState('');
  const [piegadesOpcijas, paraditPiegadesOpcijas] = useState([]);
  const [piegadesOpcija, paraditPiegadesOpciju] = useState('');
  const methods = useForm();

  var tokensPieejamajiemNovadiem = pasutijumaMarkieris.id;
  const dabutPiegadesValstis = async (markieraId) => {
    const { countries } = await commerce.services.localeListShippingCountries(markieraId);

    paraditPiegadesValstis(countries);
    paraditPiegadesValsti(Object.keys(countries)[0]);
  };

  const dabutPiegadesNovadus = async () => {
    const { subdivisions } = await commerce.services.localeListShippingSubdivisions(tokensPieejamajiemNovadiem, 'LV');

    paraditPiegadesNovadus(subdivisions);
    paraditPiegadesNovadu(Object.keys(subdivisions)[0]);
  };

  const dabutPiegadesOpcijas = async (markieraId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(markieraId, { country, region: stateProvince });

    paraditPiegadesOpcijas(options);
    paraditPiegadesOpciju(options[0].id);
  };

  useEffect(() => {
    dabutPiegadesValstis(pasutijumaMarkieris.id);
  }, []);

  useEffect(() => {
    if (piegadesValsts) dabutPiegadesNovadus(piegadesValsts);
  }, [piegadesValsts]);

  useEffect(() => {
    if (piegadesNovads) dabutPiegadesOpcijas(pasutijumaMarkieris.id, piegadesValsts, piegadesNovads);
  }, [piegadesNovads]);

  

  return (
    <>
      <Typography variant="h6" gutterBottom>Piegādes informācija</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, piegadesValsts, piegadesNovads, piegadesOpcija }))}>
          <Grid container spacing={3}>
            <Ievadlauki required name="vards" label="Vārds" />
            <Ievadlauki required name="uzvards" label="Uzvārds" />
            <Ievadlauki required name="telNr" label="Telefona nr." />
            <Ievadlauki required name="adrese" label="Iela, māja" />
            <Ievadlauki required name="epasts" label="E-pasts" />
            <Ievadlauki required name="pilseta" label="Pilsēta/Ciems" />
            <Ievadlauki required name="pastaIndekss" label="Pasta indekss" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Valsts</InputLabel>
              <Select value={piegadesValsts} fullWidth onChange={(e) => paraditPiegadesValsti(e.target.value)}>
                {Object.entries(piegadesValstis).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Novads/Pilsēta</InputLabel>
              <Select value={piegadesNovads} fullWidth onChange={(e) => paraditPiegadesNovadu(e.target.value)}>
                {Object.entries(piegadesNovadi).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Piegādes veids</InputLabel>
              <Select value={piegadesOpcija} fullWidth onChange={(e) => paraditPiegadesOpciju(e.target.value)}>
                {piegadesOpcijas.map((pO) => ({ id: pO.id, label: `${pO.description} - (${pO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/grozs">Atpakaļ uz Grozu</Button>
            <Button type="submit" variant="contained" color="primary">Tālāk</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AdresesIevadforma;