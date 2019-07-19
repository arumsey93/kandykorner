import React, { Component } from 'react'
import employees from "./good-employee.svg"
import { Link } from 'react-router-dom'
import "./Employee.css"
import AnimalCard from "../animals/AnimalCard"
import LocationCard from '../locationlist/LocationCard'

export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="employeeButton">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/employees/new")}
                    }>
                Hire Employee
                </button>
            </div>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={employees} className="good-employee" />
                                <br></br>
                                <h6>{employee.name}</h6>
                                <div className="employee-location">
                                    {
                                        this.props.location.filter(loc => loc.id === employee.locationId)
                                        .map(loc => <LocationCard key={loc.id} tyler={loc} {...this.props} />
                                            )
                                    }
                                </div>
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Fire!</button>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}