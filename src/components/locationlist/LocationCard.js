import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export default class LocationCard extends Component {
    render() {
        console.log(this.props.tyler)
        return (
            <div key={this.props.tyler.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h5>{this.props.tyler.name}</h5>
                        <h6>{this.props.tyler.address}</h6>
                        <Link className="nav-link" to={`/locationlist/${this.props.tyler.id}`}>Details</Link>
                    </div>
                </div>
            </div>
        )
    }
}