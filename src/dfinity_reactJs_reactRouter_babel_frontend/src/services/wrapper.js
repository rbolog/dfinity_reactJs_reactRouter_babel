import { dfinity_reactJs_reactRouter_babel_backend as app } from "../../../declarations/dfinity_reactJs_reactRouter_babel_backend";

export async function greet(name) {
    console.debug(name);
    try {
        const greeting = await app.greet(name);
        console.debug(greeting);
        return greeting;
    } catch (e) {
        console.warn(e.message);
        return "Error: Not a Dfinity greeting: " + name;
    }  
};