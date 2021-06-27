import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as dfinity_reactJs_reactRouter_babel_idl, canisterId as dfinity_reactJs_reactRouter_babel_id } from 'dfx-generated/dfinity_reactJs_reactRouter_babel';

const agent = new HttpAgent();
const app = Actor.createActor(dfinity_reactJs_reactRouter_babel_idl, { agent, canisterId: dfinity_reactJs_reactRouter_babel_id });

export async function greet(name) {
    console.debug(name);
    try {
        const greeting = await app.greet(name);
        console.debug(greeting);
        return greeting;
    } catch (e) {
        console.warn(e.message);
        return "Not a Dfinity greeting: " + name;
    }  
};