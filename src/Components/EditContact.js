import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import api from '../api/contacts'
class EditContact extends Component {
  constructor(props) {
    super(props)
    const contact = props.editContactHandler()
    const { id, name, email } = contact.contact

    this.state = {
      id,
      name,
      email,
      navigateTo: false
    }
  }

  updateContact = async () => {
    const response = await api.put(`/contacts/${this.state.id}`,this.state)
    return response.data
  }

  handleContactForm = (e) => {
    e.preventDefault()
    if (this.state.name === "" && this.state.email === "") {
      alert("All fields are required")
      return
    } else {
      this.updateContact()

      //this.props.editContactHandler(this.state)
      //this.setState({ name: "", email: "", id: "" })
      alert('Contact Updated Successfully!!!')
    }
    this.setState({ ...this.state, navigateTo: true })
  }
  render() {
    return (
      <div className="ui main">
        {this.state.navigateTo && (
          <Navigate to="/" replace={true} />
        )}
        <h2>Edit Contact</h2>
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
            <button className="ui button blue">Update Contact</button>
            <button className="ui button blue">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
export default EditContact