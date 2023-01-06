import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Kopsavilkums = ({ pasutijumaMarkieris }) => {

return (
  <>
    <Typography variant="h6" gutterBottom>Pasūtījuma kopsavilkums</Typography>
    <List disablePadding>
      {pasutijumaMarkieris.line_items.map((produkts) => (
        <ListItem style={{ padding: '10px 0' }} key={produkts.name}>
          <ListItemText primary={produkts.name} secondary={`Skaits: ${produkts.quantity}`} />
          <Typography variant="body2">{produkts.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Apmaksājamā summa" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {pasutijumaMarkieris.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
  </>
);

      }

export default Kopsavilkums;