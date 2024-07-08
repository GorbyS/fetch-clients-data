import React , {useContext} from 'react';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <Link to="/">Main page</Link>
            <br />
            <Link to="/add-contact">Client data</Link>
        </div>
    )
}