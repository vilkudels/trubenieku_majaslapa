import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import AdresesIevadforma from '../AdresesIevadforma';
import ApmaksasIevadforma from '../ApmaksasIevadforma';

const soli = ['Piegādes adrese', 'Maksājuma detaļas'];

const Pasutijums = ({ grozs, pasutijums, nodrosinatPasutijumaSaksanu, error }) => {
    const classes = useStyles();
    const [aktivaisSolis, uzstaditAktivoSoli] = useState(0);
    const [pasutijumaMarkieris, uzstaditPasutijumaMarkieri] = useState(null);
    const [shippingData, uzstaditPiegadesDatus] = useState({});
    const [vaiIrPabeigts, uzstaditVaiIrPabeigts] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const generetMarkieri = async () => {
            try {
                const markieris = await commerce.checkout.generateToken(grozs.id, { type: 'cart' });

                uzstaditPasutijumaMarkieri(markieris);
            } catch (error) {
                navigate('/');
            }
        }

        generetMarkieri();

    }, [grozs]);

    const nakamaisSolis = () => uzstaditAktivoSoli((ieprieksejaisAktivaisSolis) => ieprieksejaisAktivaisSolis + 1);
    const ieprieksejaisSolis = () => uzstaditAktivoSoli((ieprieksejaisAktivaisSolis) => ieprieksejaisAktivaisSolis - 1);

    const test = (data) => {
        uzstaditPiegadesDatus(data);

        nakamaisSolis();
    }

    const timeout = () => {
        setTimeout(() => {
            uzstaditVaiIrPabeigts(true);
        }, 3000);
    }

    const Confirmation = () => pasutijums.customer ? (
        <>
            <div>
                <Typography variant="h5">Paldies par pirkumu, {pasutijums.customer.firstname}</Typography>
                <br />
                <Divider className={classes.divider} />
                <br />
                <Typography variant="subtitle2">Order ref: {pasutijums.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : vaiIrPabeigts ? (
        <>
            <div>
                <Typography variant="h5">Paldies par pirkumu</Typography>
                <br />
                <Divider className={classes.divider} />
                <br />
                <Typography variant="subtitle2"></Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error) {
        <>
            <Typography>Error: {error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    }

    const Form = () => aktivaisSolis === 0 
        ? <AdresesIevadforma pasutijumaMarkieris={pasutijumaMarkieris} test={test} /> 
        : <ApmaksasIevadforma shippingData={shippingData} pasutijumaMarkieris={pasutijumaMarkieris} nakamaisSolis={nakamaisSolis} ieprieksejaisSolis={ieprieksejaisSolis} nodrosinatPasutijumaSaksanu={nodrosinatPasutijumaSaksanu} timeout={timeout} />


    return (
        <>
        <CssBaseline />
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Piegāde</Typography>
                    <Stepper aktivaisSolis={aktivaisSolis} className={classes.stepper}>
                        {soli.map((solis) => (
                            <Step key={solis}>
                                <StepLabel>{solis}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {aktivaisSolis === soli.length ? <Confirmation /> : pasutijumaMarkieris && <Form />}
                </Paper>

            </main>
        </>
    )

}

export default Pasutijums;