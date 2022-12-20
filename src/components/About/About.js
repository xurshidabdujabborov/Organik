import React from 'react'
import { Container, Grid } from '@mui/material'
import car2 from "../../assets/card 2.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./About.css"

function About() {
    return (
        <div className='About'>
            <Container>
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={car2} alt="" />
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="title">About Us</h2>
                            <h2 className="text">We Believe in Organic <br />
                            Foods For Strong Health</h2>
                            <p className="uno">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.</p>
                            <button>Shop Now <div className="icon"><ArrowForwardIcon/></div> </button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About
