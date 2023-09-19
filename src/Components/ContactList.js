import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'
const ContactList = (props) => {
    console.log(props)

    const contactList_MOCK_Data = [
        {
            id: 1,
            name: "Swathi",
            email: "vnswathi@gmail.com"
        },
        {
            id: 2,
            name: "Senthil Anand",
            email: "senthilanand@gmail.com"
        }
    ]

    const removeContact = (id) => {
        props.deleteContactHandler(id)
    }
    const renderContactList = contactList_MOCK_Data?.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} removeContact={removeContact} />
        )
    })
  
    return (
        <div className="main" style={{marginTop: '50px'}}>
            <h2 className="aligned right">Contact List
                <Link to="/addContact">
                    <button className="ui button blue">Add Contact</button>
                 </Link>   
            </h2>
            <div className='ui celled list'>
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList