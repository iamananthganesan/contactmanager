import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import Footer from './Footer';
import uuid from 'react-uuid';

function App() {
  const LOCALSTORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState(() => {
    // Getting the list of contacts if exists in local storage otherwise it take the empty array
    const retriveContacts = localStorage.getItem(LOCALSTORAGE_KEY);
    if (retriveContacts !== "undefined" && retriveContacts !== null) {
      const parseContact = JSON.parse(retriveContacts)
      return parseContact || ""
    }
    else {
       return []
    }
  })
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

  useEffect(() => {
    //Storing the contacts in local storage
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  const addContactHandler = (contact) => {
    const obj = {
      id: uuid(),
      ...contact
    }
    console.log(obj)
    setContacts([...contacts, obj])
  }

  const deleteContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{ return contact.id !== id})
    setContacts(newContactList)
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contactList={contacts} deleteContactHandler={deleteContactHandler} />
      {/* <Cart /> */}
      <Footer />
    </div>
  );
}

export default App;
