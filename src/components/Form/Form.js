import React from 'react'
import { Container , Grid } from '@mui/material'
import bottom from "../../assets/bottom.png"
import "./Form.css"

function Form() {
    return (
        <div className='Form'>
            <Container maxWidth="xl">
                <div className="img">
                    <img src={bottom} alt="" />
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="text">
                            Subscribe our <br />
                            Newsletter
                            </h2>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <form action="#">
                            <input type="text" placeholder='Enter your email address' />
                            <button>Subscribe</button>
                        </form>
                    </Grid>
                </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Form
