import React, { Component } from 'react'
import "./Owner.css"

export default class OwnersList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/owners/new")}
                    }>
                New Owner
                </button>
            </div>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {owner.name}
                                <br></br>
                                {owner.phoneNumber}
                                <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}