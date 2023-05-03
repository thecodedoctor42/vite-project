import React from "react"
import Grid from "../assets/airbnb-grid.png"

function Hero(){
    return (
        <section className="hero">
            <img src={Grid} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero