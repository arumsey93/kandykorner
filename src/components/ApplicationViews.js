import { Route } from 'react-router-dom'
import React, { Component, Fragment } from "react"
import Animals from './animals/Animals'
import LocationList from './locationlist/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/Owners';
import SearchResults from './search/SearchResults'
import APIManager from '../modules/APIManager'


export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        search: []
    }

    componentDidMount() {
        const newState = {}
    
        APIManager.getAll("animals")
            .then(animals => newState.animals = animals)
            APIManager.getAll("employees")
            .then(employees => newState.employees = employees)
            APIManager.getAll("owners")
            .then(owners => newState.owners = owners)
            APIManager.getAll("locations")
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState))
    }

    deleteAnimal = (id) => {
        return APIManager.removeAndList("animals", id)
        .then(animals => this.setState({
            animals: animals
            })
        )
    }

    deleteEmployee = id => {
        return APIManager.removeAndList("employees", id)
        .then(employees => this.setState({
            employees: employees
        })
      )
    }

    deleteOwner = id => {
        return APIManager.removeAndList("owners", id)
        .then(owners => this.setState({
            owners: owners
        })
      )
    }

    render() {
        return (
            <Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <Animals animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults search={this.state.search} locations={this.state.locations} animals={this.state.animals} owners={this.state.owners} employees={this.state.employees} />
                }} />
            </Fragment>
        )
    }
}