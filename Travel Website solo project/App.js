import React from "react"
import Header from "./Header.js"
import Main from "./Main.js"
import data from "./data.js"


export default function App() {
    const cards = data.map(item => {
        return (
            <Main 
                {...item}
            />
        )
    })
    
    return (
        <div className="app-container">
            <Header/>
            <div className="travel-container">
                {cards}
            </div>
        </div>
    )
}

