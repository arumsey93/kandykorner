import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./Animal.css"


export default class Animals extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={dog} className="icon--dog" />
                                <h5>{animal.name}</h5>
                                <h6>{this.props.owners.find(owner => owner.id === animal.ownerId).name}</h6>
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}