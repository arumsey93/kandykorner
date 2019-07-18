import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Location.css"

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                            {location.name}
                            <br></br>
                            {location.address}
                            <Link className="nav-link" to={`/locationlist/${location.id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}
