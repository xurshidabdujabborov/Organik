import React from 'react'
import { Container, Grid } from '@mui/material'
import Rating from '@mui/material/Rating';
import alisa from "../../assets/alisa.png";
import "./Work.css"

function Work() {
    return (
        <div className='Work'>
            <Container maxWidth="xl">
                <div className="center">
                    <h2 className="title">Testimonial</h2>
                    <h2 className="text">What Our Customer Saying?</h2>
                    <img src={alisa} alt="" /> <br />
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <p className="uno">The quality of organic produce is extremely high, the service is second to none and the taste of the food <br />takes me back to my childhood when we were growing our own. </p>
                    <h4>Sara Taylor</h4>
                    <p className="uno">Consumer</p>
                </div>
                <hr />
                <Grid container alignItems={"center"}>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <h2 className="text">100%</h2>
                            <p>Organic</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <h2 className="text">285</h2>
                            <p>Organic</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <h2 className="text">385+</h2>
                            <p>Organic</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <h2 className="text">25+</h2>
                            <p>Organic</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Work