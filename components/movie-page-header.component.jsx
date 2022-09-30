import React from 'react'

export default function MoviePageHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-nav sticky-top bg-dark justify-content-between">

            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <div className="collapse navbar-collapse nav-justified" id="navbarNavDropdown">
                <ul className="navbar-nav gap-12">
                    <li className="nav-item  active">
                        <a className="nav-link text-white" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">TV</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Login
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
