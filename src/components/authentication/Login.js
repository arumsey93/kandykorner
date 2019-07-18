import React, { Component } from "react"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        rememberMe: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()


        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
       if (this.state.rememberMe === false) {
        this.setState({rememberMe: false})
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
         )} else {
            this.setState({rememberMe: false})
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
            })
            )
        }
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                       <br></br>
                <label htmlFor="Remember Me">
                    <input id="rememberMe"
                           name="rememberMe"
                           value="remember"
                           type="checkbox" 
                           onClick={
                               () => {
                                   this.setState(
                                       {rememberMe: true}
                                   )
                               }
                           }/>
                           Remember Me
                </label>
                <br></br>
                <button type="submit">
                    Sign in
                </button>
            </form>
        )
    }
}