import React from 'react'
import { Container, Grid } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import car from "../../assets/card.png"
import car1 from "../../assets/card 1.png"
import "./Header.css"

function Header() {
    return (
        <>
        <header>
            <Container maxWidth="xl">
                <div className="left">
                    <h2 className="title">Made with nature</h2>
                    <h1>Welcome to the <br />
                    world of nature <br />
                    and organic.</h1>
                    <button>Explore Now <div className="icon">
                    <ArrowForwardIcon/></div> </button>
                </div>
            </Container>
        </header>
        <div className="header_title">
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={car} alt="" />
                            <div className="text">
                                <h2 className="title">Natural!!</h2>
                                <h2 className="text">Get Garden <br /> Fresh Fruits</h2>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={car1} alt="" />
                            <div className="text">
                                <h2 className="title">Offer!!</h2>
                                <h2 className="text">Get 10% off <br /> on Vegetables</h2>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    )
}

export default Header
