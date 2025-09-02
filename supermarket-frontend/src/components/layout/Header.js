import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-success shadow">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/" className="text-white fs-4 fw-bold text-decoration-none">
              SuperMarket
            </Link>
          </div>
          <nav className="d-none d-md-flex">
            <Link to="/" className="text-white text-decoration-none mx-3">Home</Link>
            <Link to="/products" className="text-white text-decoration-none mx-3">Products</Link>
          </nav>
          <div className="d-flex align-items-center">
            <form className="d-flex me-3">
              <input 
                className="form-control" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                onChange={(e) => {
                  // Redirect to products page with search query
                  if (e.target.value && e.key === 'Enter') {
                    window.location.href = `/products?search=${e.target.value}`;
                  }
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    window.location.href = `/products?search=${e.target.value}`;
                  }
                }}
              />
              <button className="btn text-white" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <span className="btn text-white disabled">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <Link to="/login" className="text-white hover:text-green-200 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;