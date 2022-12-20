import React from 'react'
import {Container , Grid } from '@mui/material'
import logo from "../../assets/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="right">
                            <h4>Contact Us</h4>
                            <span>Email</span>
                            <p className="uno">needhelp@organick.com</p>
                            <span>Phone</span>
                            <p className="uno">123 (1254) 1452</p>
                            <span>Address</span>
                            <p className="uno">88 Road, Brooklyn Street, USA</p>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="center">
                            <img src={logo} alt="" />
                            <p className="uno">We are a popular and farming company aspiring to be a leader in the Organic food industry.</p>
                            <div className="icon">
                                 <div className="col">
                                 <FacebookIcon/>
                                 </div>
                               <div className="col">
                               <TwitterIcon/>
                               </div>
                                <div className="col">
                                <InstagramIcon/>
                                </div>
                               <div className="col">
                               <TelegramIcon/>
                               </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <ul>
                        <h4>Utility Pages</h4>
                            <li>
                                <a href="#">Style Guide</a>
                            </li>
                            <li>
                                <a href="#">Protected</a>
                            </li>
                            <li>
                                <a href="#">Page Not Found</a>
                            </li>
                            <li>
                                <a href="#">Changelog</a>
                            </li>
                            <li>
                                <a href="#">Licenses</a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
