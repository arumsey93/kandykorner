import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./locationlist/LocationList"
import Animals from "./animals/Animals"
import "./kennel.css"

export default class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animals = [
        { id: 1, type: "Penguin"},
        { id: 2, type: "Lion"},
        { id: 3, type: "Tiger"},
        { id: 4, type: "Bear"}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animals
    }

    render() {
        return (
            <article>
                <h3>Student Kennels</h3>
                <h4>Location:</h4>
                <LocationList locations={this.state.locations} />
                <br></br>
                <h4>Employees:</h4>
                <EmployeeList employees={this.state.employees} />
                <br></br>
                <h4>Animals:</h4>
                <Animals animals={this.state.animals} />
            </article>
        );
    }
}