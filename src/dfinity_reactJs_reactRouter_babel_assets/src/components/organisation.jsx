import React,{Fragment} from "react";
import { Link } from 'react-router-dom';

function Organisation({ name }) {

    return (
        <Fragment>
            <div>Organisation {name}</div>
            <Link to="/greeting">Greeting</Link>
        </Fragment>
        )
}

export default Organisation