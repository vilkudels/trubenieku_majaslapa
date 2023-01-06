import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const Ievadlauki = ({ name, label}) => {

    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
         <Controller
            control={control}
            name={name}
            render = {({  field: { ref, ...field }, fieldState  })=> (
                <TextField
                    fullWidth
                    name={name}
                    defaultValue=""
                    {...field}
                    inputRef={ref}
                    label={label}
                    required
                />
            )}

         />
   </Grid>
  );
}

export default Ievadlauki;