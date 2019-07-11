import React, { Component } from 'react'

export default class Animals extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.type}
                    </div>
                )
            }
            </section>
        )
    }
}