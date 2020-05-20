import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header(prop) {
    return (
        <div>
            <nav class="navbar navbar-expand navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand text-danger h1" style={{ marginBottom: '0' }}>{prop.branding}</span>
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link h5 text-primary" style={{ marginBottom: '0' }}> Home </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="./add" className="nav-link h5 text-primary" style={{ marginBottom: '0' }}>ADD</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Header;