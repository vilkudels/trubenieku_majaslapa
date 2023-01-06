import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import GrozaVieniba from './GrozaVieniba/GrozaVieniba';
import useStyles from './styles';

const Cart = ({ grozs, atjaunojotProduktuSkaitu, iznemotNoGroza, iztuksojotVisuGrozu }) => {
  const classes = useStyles();

  const nodrosinatGrozaIztuksosanu = () => iztuksojotVisuGrozu();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">Tavs grozs ir tukšs,
      <Link className={classes.link} to="/"> pievieno savus iemīļotākos produktus</Link>!
    </Typography>
  );

  if (!grozs.line_items) return 'Ielādē...';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {grozs.line_items.map((produkts) => (
          <Grid item xs={12} sm={4} key={produkts.id}>
            <GrozaVieniba item={produkts} atjaunojotProduktuSkaitu={atjaunojotProduktuSkaitu} iznemotNoGroza={iznemotNoGroza} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Apmaksai: {grozs.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={nodrosinatGrozaIztuksosanu}>Iztukšot grozu</Button>
          <Button className={classes.checkoutButton} component={Link} to="/pasutijums" size="large" type="button" variant="contained" color="primary">Pasūtīt</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Tavs iepirkumu grozs</Typography>
      { !grozs.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;