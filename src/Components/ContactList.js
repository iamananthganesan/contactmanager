import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'
const ContactList = (props) => {    
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

    const editContact = (id) =>{
        props.editContactHandler(id)
    }
    const renderContactList = props?.contactList?.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} removeContact={removeContact} editContact={editContact} />
        )
    })

    return (
        <div className="main" style={{ marginTop: '50px' }}>        
            <div className='ui grid'>
                <div className='column'>
                    <h2 className="aligned right">Contact List</h2>
                </div>
                <div className='column-6 aligned right'></div>
                <Link to="/addContact">
                    <button className="ui button blue">Add Contact</button>
                </Link>
            </div>
            <div className='ui celled list'>
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList