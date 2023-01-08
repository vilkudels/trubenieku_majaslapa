import React from "react";
import { Grid } from '@material-ui/core';
import { Helmet } from "react-helmet";

import Produkts from "./Produkts/Produkts";
import useStyles from './styles';

const Produkti = ({ produkti, nodrosinatPievienosanuGrozam }) => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
            <div className={classes.toolbar} />
            <h1 className="pb-3 display-4 fw-bold text-center">Produkti</h1>
            <Grid container justifyContent="center" spacing={4}>
                {produkti.map(produkts => (
                    <Grid item key={produkts.id} xs={12} sm={6} md={4} lg={3}>
                        <Produkts produkts={produkts} nodrosinatPievienosanuGrozam={nodrosinatPievienosanuGrozam} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
    
}

export default Produkti;