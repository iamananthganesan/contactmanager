import React from "react";
import user from '../images/kristy.png'
import { Link } from "react-router-dom";
import './ContactCard.css'

const ContactCard = (props) => {
    const { name, email, id } = props.contact

    const deleteContact = (id) => {
        props.removeContact(id)
    }
    const editContact = (id) => {
        props.editContact(id)
    }
    return (
        <div>
            <div className='item contact-cart'>
                <figure>
                    <img className="ui mini circular image" style={{ height: '75px', width: '75px' }} alt="user" src={user} />
                </figure>
                <div className='content'>
                    <div className='ui sub header'>
                        <Link to={`/contactDetail/${id}`} state={{ contact: props.contact }}>
                            <div className='header'>{name}</div>
                            <div>{email}</div>
                        </Link>
                    </div>
                </div>
                <Link to={`/editContact`} state={{ contact: props.contact }}>
                    <i className='edit alternate outline icon contact-trash'></i>
                </Link>
                <i className='trash alternate outline icon contact-trash' onClick={() => { deleteContact(id) }}></i>
            </div>
        </div>
    )
}

export default ContactCard