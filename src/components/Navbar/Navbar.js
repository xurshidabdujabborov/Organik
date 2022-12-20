import React from 'react'
import { Container, Grid } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "../../assets/logo.png"
import "./Nav.css"

function Navbar() {
    return (
        <nav>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={2} sm={12} xs={12}>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </Grid>
                    <Grid md={7} sm={12} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Shop    </a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="right">
                            <div className="icon">
                            <AddShoppingCartIcon/>
                            </div>
                            <p>Cart</p>
                            <span>0</span>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </nav>
    )
}

export default Navbar
