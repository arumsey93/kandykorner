import React, { Component } from 'react'
import employees from "./good-employee.svg"
import "./Employee.css"

export default class EmployeeDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employee">
                <div key={ this.props.employee.id } className="card">
                    <div className="card-body">
                        <h6 className="card-title">
                            <img src={ employees } className="good-employee" />
                            <br></br>
                            { this.props.employee.name }
                        </h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.fireEmployee(this.props.employee.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Fire</button>
                    </div>
                </div>
            </section>
        )
    }
}