import React, { Component } from 'react'

export default class Animals extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.name}
                        <br></br>
                        <p>Owner: {
                            this.props.owners.find(owner => owner.id === animal.ownerId).name

                            // Using the .map method to relate animal to owner
                            // this.props.owners.map( owner =>
                            // owner.id === animal.ownerId ? <h5 key={owner.id}>{owner.name}</h5> : ""
                            // )
                        }</p>
                    </div>
                )
            }
            </section>
        )
    }
}