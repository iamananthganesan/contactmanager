import React, { useEffect, useRef, useState, useId } from "react";
import user from '../images/kristy.png'
import { Link, useLocation } from "react-router-dom";


const ContactDetail = (props) => {
    const [username, setuserName] = useState('');
    const location = useLocation()
    const inputEl = useRef()
    const id = useId()
    const previouscounterRef = useRef()
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        previouscounterRef.current = counter
        console.log("inside sideeffectmethod")
        return () => {
            console.log("code clean up!")
        }
    }, [counter])
    const { name, email } = location.state.contact

    
    console.log("check component re rendering")
    const handleReset = () => {
        setuserName('')
        console.log(inputEl, id)
        inputEl.current.focus()
    }
    { } return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <div className="center-div">
                    <Link to="/">
                        <button className="ui button blue center">Back to contact</button>
                    </Link>
                </div>
{/* 
                <input type="text" ref={inputEl} value={username} onChange={(event) => { setuserName(event.target.value) }} />
                <button onClick={handleReset}>Reset</button>
                <div>
                    <h1>Random Counter {counter}</h1>
                    <button onClick={() => { setCounter(Math.ceil(Math.random() * 100)) }}>Generate number</button>

                    {(typeof previouscounterRef !== "undefined") ? ( <h1>{previouscounterRef.current}</h1>) : null}
                </div> */}
            </div>
        </div>
    )
}

export default ContactDetail