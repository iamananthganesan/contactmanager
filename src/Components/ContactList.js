import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    console.log(props)
    const renderContactList = props.contactList.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id}/>
        )
    })

    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    )
}

export default ContactList