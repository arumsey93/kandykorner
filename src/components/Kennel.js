import React, { Component, Fragment } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <ApplicationViews />
            </Fragment>
        )
    }
}

export default Kennel