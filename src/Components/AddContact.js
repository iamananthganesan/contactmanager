import React, { Component } from "react";


class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            email: ''
        }
    }

    handleContactForm = (e) => {
        e.preventDefault()
        console.log(this.state)
        if(this.state.name == "" && this.state.email == ""){
            alert("All fields are required")
            return
        } else {
            this.props.addContactHandler(this.state)
            this.setState({id: Math.random(100), name: "",email: ""})            
        }
    }
    render() {
        return (
            <div className="ui main">
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