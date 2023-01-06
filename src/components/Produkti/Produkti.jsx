import React from "react";
import { Grid } from '@material-ui/core';

import Produkts from "./Produkts/Produkts";
import useStyles from './styles';

const Produkti = ({ produkti, nodrosinatPievienosanuGrozam }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {produkti.map((produkts) => (
                    <Grid item key={produkts.id} xs={12} sm={6} md={4} lg={3}>
                        <Produkts produkts={produkts} nodrosinatPievienosanuGrozam={nodrosinatPievienosanuGrozam} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
    
}

export default Produkti;