import React,{Fragment} from "react";
import { Link } from 'react-router-dom';

function Home({ name }) {

    return (
        <Fragment>
            <div>Home {name}</div>
            <Link to="/greeting">Greeting</Link>
        </Fragment>
        )
}

export default Home