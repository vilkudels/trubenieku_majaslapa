import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const GrozaVieniba = ({ item, atjaunojotProduktuSkaitu, iznemotNoGroza }) => {
  const classes = useStyles();

  const nodrosinatProduktuSkaitaAtjaunosanos = (produktaId, jaunaisSkaits) => atjaunojotProduktuSkaitu(produktaId, jaunaisSkaits);

  const nodrosinatIznemsanuNoGroza = (produktaId) => iznemotNoGroza(produktaId);

  return (
    <Card className="cart-item">
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => nodrosinatProduktuSkaitaAtjaunosanos(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => nodrosinatProduktuSkaitaAtjaunosanos(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => nodrosinatIznemsanuNoGroza(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default GrozaVieniba;