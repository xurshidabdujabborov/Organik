import React from 'react'
import car10 from "../../assets/card 10.png"
import car11 from "../../assets/card 11.png"
import car12 from "../../assets/card 12.png"
import "./Food.css"

function Food() {
    return (
        <div className='Food'>
            <div className="box">
                <div className="card">
                    <img src={car10} alt="" />
                    <div className="bot">
                        <button>Fruit Juice</button>
                    </div>
                </div>
                <div className="card">
                    <img src={car11} alt="" />
                    <div className="bot">
                        <button>Organic Food</button>
                    </div>
                </div>
                <div className="card">
                    <img src={car12} alt="" />
                    <div className="bot">
                        <button>Nuts Cookies</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Food
