import React, { Component } from 'react'

export default class OwnersList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(obj =>
                    // console.log(employee)
                    <div key={obj.id}>
                        {obj.name}
                        <br></br>
                        {obj.phoneNumber}
                    </div>
                )
            }
            </section>
        )
    }
}