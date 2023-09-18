import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    console.log(props)
    const removeContact =(id) =>{
        props.deleteContactHandler(id)
    }
    const renderContactList = props?.contactList?.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} removeContact={removeContact}/>
        )
    })

    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    )
}

export default ContactList