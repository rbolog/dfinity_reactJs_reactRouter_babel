import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as dfinity_reactJs_reactRouter_babel_idl, canisterId as dfinity_reactJs_reactRouter_babel_id } from 'dfx-generated/dfinity_reactJs_reactRouter_babel';

const agent = new HttpAgent();
const dfinity_reactJs_reactRouter_babel = Actor.createActor(dfinity_reactJs_reactRouter_babel_idl, { agent, canisterId: dfinity_reactJs_reactRouter_babel_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await dfinity_reactJs_reactRouter_babel.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
