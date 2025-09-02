import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <div className="position-relative" style={{ paddingBottom: '56.25%' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="position-absolute w-100 h-100 card-img-top"
            style={{ objectFit: 'cover', top: 0, left: 0 }}
          />
          {product.discount > 0 && (
            <div className="position-absolute badge bg-danger" style={{ top: '0.5rem', right: '0.5rem' }}>
              {product.discount}% OFF
            </div>
          )}
        </div>
      </Link>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="card-title mb-1">
              <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">{product.name}</Link>
            </h5>
            <p className="card-text text-muted small mb-2">{product.category}</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-warning me-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="small fw-medium">{product.rating}</span>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-baseline">
            <span className="fs-5 fw-bold text-success">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="small text-muted text-decoration-line-through ms-2">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <button className="btn btn-sm btn-success rounded-pill">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;