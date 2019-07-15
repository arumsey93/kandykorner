import React, { Component, Fragment } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"



class Kennel extends Component {
    state = {
        searchResults: []
    }
    inputEvent = (event) => {
        const newState = {}
        if (event.key === "Enter") {
            let input = document.querySelector(".search").value
            // window.location.href = "http://localhost:3000/search"
            fetch (`http://localhost:5002/animals?name_like=${input}`)
            .then(r => r.json())
            .then(animals => newState.searchResults = animals)
            .then(() => this.setState(newState))
        }
    }

    render() {
        return (
            <Fragment>
                <NavBar inputEvent={this.inputEvent}/>
                <ApplicationViews searchResults={this.state.searchResults} />
            </Fragment>
        )
    }
}

export default Kennel