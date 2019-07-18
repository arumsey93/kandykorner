import { Route, Redirect } from "react-router-dom"
import React, { Component, Fragment } from "react"
import { withRouter } from 'react-router'
import Animals from './animals/Animals'
import LocationList from './locationlist/LocationList'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import OwnersList from './owners/Owners';
import EmployeeDetail from './employee/EmployeeDetail'
import AnimalDetail from './animals/AnimalDetail'
import LocationDetail from './locationlist/LocationDetail'
import SearchResults from './search/SearchResults'
import APIManager from '../modules/APIManager'
import Login from './authentication/Login'
import AnimalForm from './animals/AnimalForm'
import OwnerForm from './owners/OwnerForm'


class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
    }

    componentDidMount() {
        const newState = {}
        APIManager.getAll("animals")
            .then(animals => newState.animals = animals)
            APIManager.getAll("employees")
            .then(employees => newState.employees = employees)
            APIManager.getAll("owners")
            .then(owners => newState.owners = owners)
            APIManager.getAll("locations")
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState))
    }

    newDeleteAnimal= id => APIManager.removeAndList("animals", id)
    .then(APIManager.getAll("animals"))
    .then(animals => {
        this.setState({ animals: animals })
    })
    .then(()=> console.log("yoo hoo"))

    deleteAnimal = id => APIManager.removeAndList("animals", id)
    .then(APIManager.getAll("animals"))
    .then(animals => {
        this.props.history.push("/animals")
        this.setState({ animals: animals })
    })

    deleteEmployee = id => APIManager.removeAndList("employees", id)
    .then(APIManager.getAll("employees"))
    .then(employees => {
        this.props.history.push("/employees")
        this.setState({ employees: employees })
    })

    deleteOwner = id => {
        return APIManager.removeAndList("owners", id)
        .then(owners => {
            this.props.history.push("/owners")
            this.setState({owners: owners})
    })
    }

    deleteLocation = id => APIManager.removeAndList("locations", id)
    .then(APIManager.getAll("locations"))
    .then(locations => {
        this.props.history.push("/locations")
        this.setState({ locations: locations })
        })

    addAnimal = animal =>
    APIManager.post("animals", animal)
        .then(() => APIManager.getAll("animals"))
        .then(animals =>
        this.setState({
            animals: animals
            })
        );

    addEmployee = employee =>
    APIManager.post("employees", employee)
        .then(() => APIManager.getAll("employees"))
        .then(employees =>
        this.setState({
            employees: employees
            })
        );

    addOwner = owner =>
    APIManager.post("owners", owner)
        .then(() => APIManager.getAll("owners"))
        .then(owners =>
        this.setState({
            owners: owners
            })
        );

    render() {
        return (
            <Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList 
                        locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/locationlist/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )
                    if (!location) {
                        location = {id:404, name:"404", breed: "Location not found"}
                    }
                    return <LocationDetail location={ location } removeLocation={ this.deleteLocation } />
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <Animals {...props}
                        animals={this.state.animals} 
                        owners={this.state.owners} 
                        // employees={this.state.employees} 
                        deleteAnimal={this.deleteAnimal}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }
                    return <AnimalDetail
                    animal={ animal } 
                    dischargeAnimal={ this.deleteAnimal } />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} 
                       owners={this.state.owners} />
                }} />
                <Route exact path="/employees" render={(props) => {
                     if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                        employees={this.state.employees} 
                        deleteEmployee={this.deleteEmployee}/>
                     } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    if (!employee) {
                        employee = {id:404, name:"404", breed: "Employee not found"}
                    }
                    return <EmployeeDetail employee={ employee } fireEmployee={ this.deleteEmployee } />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                       addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList {...props}
                    owners={this.state.owners} 
                    deleteOwner={this.deleteOwner} />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                    addOwner={this.addOwner}  />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults results={this.props.results} />
                }} />
            </Fragment>
        )
    }
}

export default withRouter(ApplicationViews)