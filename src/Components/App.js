import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import Footer from './Footer';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from 'react-router-dom'
import ContactDetail from './ContactDetail';

import api from '../api/contacts'
import EditContact from './EditContact';
import { Link, useLocation } from "react-router-dom";

function App() {
  const LOCALSTORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const location = useLocation()
  // const [contacts, setContacts] = useState(() => {
  //   // Getting the list of contacts if exists in local storage otherwise it will takes the empty array
  //   const retriveContacts = localStorage.getItem(LOCALSTORAGE_KEY);
  //   if (retriveContacts !== "undefined" && retriveContacts !== null) {
  //     const parseContact = JSON.parse(retriveContacts)
  //     return parseContact || ""
  //   }
  //   else {
  //     return []
  //   }
  // })
  //MOCK DATA
  // const contactList_MOCK_Data = [
  //   {
  //     id: 1,
  //     name: "Swathi",
  //     email: "vnswathi@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     name: "Senthil Anand",
  //     email: "senthilanand@gmail.com"
  //   }
  // ]

  const fetchContacts = async () =>{
    const response = await api.get("/contacts")
    return response.data
  }

  useEffect(() => {
    //Storing the contacts in local storage
    //localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts))
    const retriveContacts = async () =>{
      const allContacts = await fetchContacts()
      if(allContacts) setContacts(allContacts)
    }
    retriveContacts()
  }, [])


  const addContactHandler = async (contact) => {    
    const obj = {
      id: uuidv4(),
      ...contact
    }
    
    const response = await api.post(`/contacts/`, obj)
    console.log(obj, response)
    setContacts([...contacts, obj])
  }
  const editContactHandler = () => {    
    return location.state
  }
  const deleteContactHandler = async (id) => {
    const response = await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => { return contact.id !== id })
    setContacts(newContactList)
  }
  return (
    <div className="ui container">
      <Header/>      
        <Routes>
          <Route exact path="/" element={ <ContactList contactList={contacts} deleteContactHandler={deleteContactHandler} /> } />
          <Route path="/addContact" element={<AddContact addContactHandler={addContactHandler} /> } />
          <Route path="/editContact" element={<EditContact editContactHandler={editContactHandler} /> } />
          <Route path='contactDetail/:id' element={<ContactDetail/>} />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contactList={contacts} deleteContactHandler={deleteContactHandler} /> */}      
      {/* <Cart /> */}
      <Footer />
    </div>
  );
}

export default App;
