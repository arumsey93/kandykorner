import React, { Component, Fragment } from "react"
import NavBar from "./nav/NavBar"
import { withRouter } from 'react-router'
import ApplicationViews from "./ApplicationViews"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"



class Kennel extends Component {
    state = {
        animalResults: [],
        employeeResults: [],
        locationResults: [],
        ownerResults: []
    }
    inputEvent = (event) => {
        const newState = {}
        if (event.key === "Enter") {
            let input = document.querySelector(".search").value
            fetch (`http://localhost:5002/animals?name_like=${input}`)
            .then(r => r.json())
            .then(animals => newState.animalResults = animals)
            fetch (`http://localhost:5002/employees?name_like=${input}`)
            .then(r => r.json())
            .then(employees => newState.employeeResults = employees)
            fetch (`http://localhost:5002/locations?name_like=${input}`)
            .then(r => r.json())
            .then(locations => newState.locationResults = locations)
            fetch (`http://localhost:5002/owners?name_like=${input}`)
            .then(r => r.json())
            .then(owners => newState.ownerResults = owners)
            .then(() => {
                this.props.history.push('/search')
                this.setState(newState)
            })
        }
    }

    render() {
        return (
            <Fragment>
                <NavBar inputEvent={this.inputEvent}/>
                <ApplicationViews results={this.state} />
            </Fragment>
        )
    }
}

export default withRouter(Kennel)