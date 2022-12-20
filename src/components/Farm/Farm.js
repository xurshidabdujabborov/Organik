import React from 'react'
import car9 from "../../assets/card 9.png"
import "./Farm.css"

function Farm() {
    return (
        <div className='Farm'>
           <div className="box">
           <div className="left">
                <img src={car9} alt="" />
            </div>
            <div className="right">
                <h2 className="title">Eco Friendly</h2>
                <h2 className="text">From our Farm <br />to your Home.</h2>
                <h4>Choose Your Products</h4>
                <p className="uno">In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.</p>
                <h4>Choose Your Products</h4>
                <p className="uno">In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.</p>
                <h4>Choose Your Products</h4>
                <p className="uno">In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.</p>
            </div>
           </div>
        </div>
    )
}

export default Farm
