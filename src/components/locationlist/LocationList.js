import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    // console.log(employee)
                    <div key={location.id}>
                        {location.name}
                        <br></br>
                        {location.address}
                    </div>
                )
            }
            </section>
        )
    }
}