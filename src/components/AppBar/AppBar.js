import React from 'react';


const AppBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 fw-bold">
            <div className="container-fluid">
                <a className="navbar-brand fs-2" href="/">Shop<span className="text-danger">Zoo</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/review">Review Order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/inventory" aria-disabled="true">Manage Inventory</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default AppBar;