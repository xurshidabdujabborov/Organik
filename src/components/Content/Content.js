import React from 'react'
import { Container, Grid } from '@mui/material'
import car13 from "../../assets/card 13.png"
import car14 from "../../assets/card 14.png"
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Content.css"

function Content() {
    return (
        <div className='Content'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={8} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="title">News</h2>
                            <h2 className="text">Discover The recent content about organic products</h2>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="right">
                            <button>More News</button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={car13} alt="" />
                            <div className="box">
                                <div className="flex">
                                    <PersonIcon />
                                    <span>Kristina Castle</span>
                                </div>
                                <h4>Everything You Need to Know About Organic</h4>
                                <p className="uno">Organic farming is the only way that you still can <br /> experience the real world.</p>
                                <h5>View More <ArrowForwardIcon/> </h5>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={car14} alt="" />
                            <div className="box">
                                <div className="flex">
                                    <PersonIcon />
                                    <span>Alex Louis</span>
                                </div>
                                <h4>Organic Fruits: Surprising Benefits and Facts</h4>
                                <p className="uno">Organic farming is the only way that you still can <br /> experience the real world.</p>
                                <h5>View More <ArrowForwardIcon/> </h5>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Content
