import React, { Component } from 'react'
import "./Owner.css"

export default class OwnersList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(obj =>
                    <div key={obj.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {obj.name}
                                <br></br>
                                {obj.phoneNumber}
                                <button
                                    onClick={() => this.props.deleteOwner(obj.id)}
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