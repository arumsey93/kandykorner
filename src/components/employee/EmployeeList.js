import React, { Component } from 'react'
import employees from "./good-employee.svg"
import "./Employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={employees} className="good-employee" />
                                <br></br>
                                <h6>{employee.name}</h6>
                                <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Fire!</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}