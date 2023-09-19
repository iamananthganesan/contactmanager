import React from "react";
import user from '../images/kristy.png'
import './ContactCard.css'

const ContactCard = (props) => {
    const { name, email, id } = props.contact

    const deleteContact = (id) => {
        props.removeContact(id)
    }
    return (
        <div>
            <div className='item contact-cart'>
                <figure>
                    <img className="ui mini circular image" style={{ height: '75px', width: '75px' }} alt="user" src={user} />
                </figure>
                <div className='content'>
                    <div className='ui sub header'>
                        <div className='header'>{name}</div>
                        <div>{email}</div>
                    </div>
                </div>
                <i className='trash alternate outline icon contact-trash' onClick={() => { deleteContact(id) }}></i>
            </div>
        </div>
    )
}

export default ContactCard