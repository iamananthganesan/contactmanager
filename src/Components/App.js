import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
function App() {

  const [contacts, setContacts] = useState([])
  const LOCALSTORAGE_KEY = "Contacts"
  const contactList = [
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
  useEffect(() => {
    const retriveConacts = localStorage.getItem(LOCALSTORAGE_KEY)
    if (retriveConacts) setContacts(JSON.parse(retriveConacts))
    console.log('contacts', contacts)
  }, [contacts])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contactList={contacts} />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
