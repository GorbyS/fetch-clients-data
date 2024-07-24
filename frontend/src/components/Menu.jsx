import React , {useContext} from 'react';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <Link className="button menu" to="/">Main page</Link>
            <Link className="button menu" to="/add-contact">Client data</Link>
        </div>
    )
}

//Code-review