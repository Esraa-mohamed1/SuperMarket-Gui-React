import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/categories/${category.id}`}
      className="card text-decoration-none shadow-sm h-100"
    >
      <div className="position-relative" style={{ paddingBottom: '75%' }}>
        <img 
          src={category.image} 
          alt={category.name} 
          className="position-absolute w-100 h-100 card-img"
          style={{ objectFit: 'cover', top: 0, left: 0 }}
        />
        <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
          <div className="position-absolute bottom-0 p-3 w-100">
            <h3 className="fs-5 fw-bold text-white mb-1">{category.name}</h3>
            <p className="small text-light">{category.productCount} Products</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;