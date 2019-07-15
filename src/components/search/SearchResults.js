import React, { Component } from 'react'


export default class SearchResults extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Search Results</h3>
                {
                    this.props.searchResults.map(result => <p key={result.id}>{result.name}</p>)
                }
            </React.Fragment>
        )
    }
}
