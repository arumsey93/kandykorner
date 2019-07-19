import React, { Component } from 'react'
import "./Location.css"
import LocationCard from './LocationCard.js'

export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="locations">
            {
                this.props.locations.map(location => {
                    console.log(location)
                    return <LocationCard key={location.id} tyler={location} {...this.props} />
                })
            }
            </section>
            </React.Fragment>
        )
    }
}
