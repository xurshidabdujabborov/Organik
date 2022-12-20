import React from 'react'
import { Container, Grid} from '@mui/material'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./Pro.css"
import car3 from "../../assets/card 3.png"
import car4 from "../../assets/card 4.png"
import car5 from "../../assets/card 5.png"
import car6 from "../../assets/card 6.png"
import car7 from "../../assets/card 7.png"
import car8 from "../../assets/card 8.png"

function Prodects() {
    return (
        <div className='Pro'>
            <Container maxWidth="xl">
                <div className="text">
                    <h2 className="title">Organic</h2>
                    <h2 className="text">Our Products</h2>
                </div>
                <Grid container>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car3} alt="" />
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
                            <img src={car4} alt="" />
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
                            <img src={car5} alt="" />
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

export default Prodects