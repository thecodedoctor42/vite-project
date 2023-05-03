import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"

function App() {
    const cardElements = data.map(item => {
      return (
        <Card 
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
      )
  })        

  return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cardElements}
        </section>
      </div>
  )
}

export default App