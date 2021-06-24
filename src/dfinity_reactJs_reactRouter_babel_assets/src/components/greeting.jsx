
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as dfinity_reactJs_reactRouter_babel_idl, canisterId as dfinity_reactJs_reactRouter_babel_id } from 'dfx-generated/dfinity_reactJs_reactRouter_babel';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/main.css';
import logo from '../images/logo.png';

const agent = new HttpAgent();
const app = Actor.createActor(dfinity_reactJs_reactRouter_babel_idl, { agent, canisterId: dfinity_reactJs_reactRouter_babel_id });

async function doGreet(name) {
    console.debug(name);
    const greeting = await app.greet(name);
    console.debug(greeting);
    document.getElementById("greeting").innerText = greeting;
  };

function Greeting() {
    const [input,setInput] = useState('');
  
    return (
        <Fragment>
            <div id="greetingSection">
                <img src={logo} alt="DFINITY logo" />
                <label>Your name:</label>
                <input type="text" name="name" value={input} onInput={e => setInput(e.target.value)}/>
                <button id="clickMeBtn" onClick={() => doGreet(input)} >Call dfinity greet...</button>
            </div>
            <div id="greeting" />
            <Link to="/">Back</Link>
        </Fragment>
      );
  }
  
  export default Greeting
  