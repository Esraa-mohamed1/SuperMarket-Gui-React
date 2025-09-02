import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/ui/ProductCard';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const allProducts = [
  {
    id: 1,
    name: 'Organic Bananas',
    category: 'Fruits',
    price: 1.99,
    oldPrice: 2.49,
    discount: 20,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Fresh Milk',
    category: 'Dairy',
    price: 2.49,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Whole Grain Bread',
    category: 'Bakery',
    price: 3.29,
    oldPrice: 3.99,
    discount: 15,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Chicken Breast',
    category: 'Meat',
    price: 5.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Avocado',
    category: 'Fruits',
    price: 2.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Greek Yogurt',
    category: 'Dairy',
    price: 4.49,
    oldPrice: 4.99,
    discount: 10,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'Salmon Fillet',
    category: 'Seafood',
    price: 9.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Organic Eggs',
    category: 'Dairy',
    price: 3.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

const categories = [
  'All',
  'Fruits',
  'Vegetables',
  'Dairy',
  'Bakery',
  'Meat',
  'Seafood',
  'Beverages',
  'Snacks',
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Check for search query in URL parameters
  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const search = queryParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, []);

  // Filter products based on category and search query
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // 'featured'
        return 0; // Keep original order
    }
  });

  return (
    <Layout>
      <div className="container py-4" style={{ backgroundColor: '#FFF8F0' }}>
        <h1 className="fs-2 fw-bold mb-4">All Products</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded shadow p-4 mb-4" style={{ borderTop: '3px solid #FF8C00' }}>
          <div className="row g-3">
            <div className="col-md-6 position-relative">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="form-select"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div className="col-sm-6">
                  <label htmlFor="sort" className="form-label">Sort By</label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="form-select"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {sortedProducts.map(product => (
              <div className="col" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-emoji-frown fs-1 text-secondary"></i>
            <h3 className="mt-3 fs-4 fw-medium">No products found</h3>
            <p className="mt-2 text-secondary">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortBy('featured');
              }}
              className="mt-3 btn" 
              style={{ backgroundColor: '#FF8C00', color: 'white' }}
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {/* Pagination */}
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous" style={{ color: '#FF8C00', borderColor: '#FFD8B1' }}>
                <span aria-hidden="true">
                  <i className="bi bi-chevron-left"></i>
                </span>
                <span className="visually-hidden">Previous</span>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#" style={{ backgroundColor: '#FF8C00', borderColor: '#FF8C00' }}>1</a></li>
            <li className="page-item"><a className="page-link" href="#" style={{ color: '#FF8C00', borderColor: '#FFD8B1' }}>2</a></li>
            <li className="page-item"><a className="page-link" href="#" style={{ color: '#FF8C00', borderColor: '#FFD8B1' }}>3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next" style={{ color: '#FF8C00', borderColor: '#FFD8B1' }}>
                <span aria-hidden="true">
                  <i className="bi bi-chevron-right"></i>
                </span>
                <span className="visually-hidden">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default ProductsPage;