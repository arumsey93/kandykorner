import React, { Component } from "react"
import { Link } from "react-router-dom"
import dog from "./DogIcon.svg"
import "./Animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={dog} className="icon--dog" />
                        <h5>{this.props.animal.name}</h5>
                        {/* <h6>{this.props.owners.find(owner => owner.id === animal.ownerId).name}</h6> */}
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                            }}
                            >
                            Edit
                            </button>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</a>
                    </div>
                </div>
            </div>
        )
    }
}