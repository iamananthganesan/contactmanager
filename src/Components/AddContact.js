import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            navigateTo: false
        }
    }

    handleContactForm = (e) => {
        e.preventDefault()
        if (this.state.name === "" && this.state.email === "") {
            alert("All fields are required")
            return
        } else {
            this.props.addContactHandler(this.state)
            this.setState({ name: "", email: "", id: "" })
            alert('Contact added Successfully!!!')
        }
        this.setState({ ...this.state, navigateTo: true })
    }
    render() {
        return (
            <div className="ui main">
                {this.state.navigateTo && (
                    <Navigate to="/" replace={true} />
                )}
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.handleContactForm}>
                    <div className="ui field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="contactName"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </div>
                    <div className="ui field">
                        <label>Email</label>
                        <input type="text"
                            name="contactemail"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <div className="ui field">
                        <button className="ui button blue">Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddContact