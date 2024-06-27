import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalContext/GlobalContext';

export default function Menu() {
    // const {client} = useContext(GlobalContext)
    return (
        <div className="menu">
            <Link to="/">Main page</Link>
            <br></br>
            <Link to="/add-contact">Client data</Link>
            {/* <div> {client} </div> */}

        </div>
    )
}