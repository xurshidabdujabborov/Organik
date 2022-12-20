import React from 'react'
import { Container, Grid } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import car6 from "../../assets/card 6.png"
import car7 from "../../assets/card 7.png"
import car8 from "../../assets/card 8.png"
import "./Offer.css"

function Offer() {
    return (
        <div className='Offer'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="title">Offer Products</h2>
                            <h2 className="text">We Offer Organic for You</h2>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="right">
                            <button>View All products <div className="icon">
                                <ArrowForwardIcon /></div></button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car6} alt="" />
                            <div className="bot">
                                <button>Vegetable</button>
                            </div>
                            <p>Calabrese Broccoli</p>
                            <div className="flex">
                                <span>$ 25.00 USD <a href="#">$ 21.00 USD</a> </span>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car7} alt="" />
                            <div className="bot">
                                <button>Vegetable</button>
                            </div>
                            <p>Calabrese Broccoli</p>
                            <div className="flex">
                                <span>$ 25.00 USD <a href="#">$ 21.00 USD</a> </span>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car8} alt="" />
                            <div className="bot">
                                <button>Vegetable</button>
                            </div>
                            <p>Calabrese Broccoli</p>
                            <div className="flex">
                                <span>$ 25.00 USD <a href="#">$ 21.00 USD</a> </span>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Offer
