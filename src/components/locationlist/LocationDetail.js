import React, { Component } from 'react'
import "./Location.css"

export default class Location extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="location">
                <div key={ this.props.location.id} className="card">
                <div className="card-body">
                            {this.props.location.name}
                            <br></br>
                            {this.props.location.address}
                            </div>
                            <button onClick={
                                () => {
                                    this.setState(
                                        {saveDisabled: true},
                                        () => this.props.removeLocation(this.props.location.id)
                                        )
                                    }
                                }
                                disabled={ this.state.saveDisabled }
                                className="card-link">Delete</button>
                    </div>
            </section>
        )
    }
}