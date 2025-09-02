import React from 'react';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/ui/ProductCard';
import CategoryCard from '../../components/ui/CategoryCard';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const featuredProducts = [
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
];

const categories = [
  {
    id: 1,
    name: 'Fruits & Vegetables',
    productCount: 124,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Dairy & Eggs',
    productCount: 86,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Meat & Seafood',
    productCount: 93,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Bakery',
    productCount: 65,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="position-relative bg-success text-white">
        <div className="position-absolute w-100 h-100 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Supermarket background" 
            className="w-100 h-100"
            style={{ objectFit: 'cover', opacity: 0.2 }}
          />
        </div>
        <div className="container py-5 py-md-6 position-relative" style={{ zIndex: 10 }}>
          <div className="col-md-8 col-lg-6">
            <h1 className="display-4 fw-bold mb-4">Fresh Groceries Delivered to Your Door</h1>
            <p className="fs-4 mb-4">Shop from our wide selection of fresh produce, dairy, meat, and pantry essentials.</p>
            <div className="d-flex flex-wrap gap-3">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg" className="bg-white bg-opacity-25">View Deals</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fs-1 fw-bold">Shop by Category</h2>
            <Link to="/categories" className="text-success text-decoration-none d-flex align-items-center fw-medium">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="ms-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {categories.map(category => (
              <div className="col" key={category.id}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fs-1 fw-bold">Featured Products</h2>
            <Link to="/products" className="text-success text-decoration-none d-flex align-items-center fw-medium">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="ms-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {featuredProducts.map(product => (
              <div className="col" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="bg-white rounded shadow overflow-hidden">
            <div className="row">
              <div className="col-md-6 position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Fresh vegetables" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-6 p-4 p-md-5 d-flex flex-column justify-content-center">
                <span className="badge bg-success bg-opacity-25 text-success mb-3 fs-6">Limited Time Offer</span>
                <h3 className="fs-2 fw-bold mb-3">20% Off Fresh Produce</h3>
                <p className="text-secondary mb-4">Stock up on fresh fruits and vegetables with our special discount. Valid until the end of the month.</p>
                <div>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 bg-success text-white">
        <div className="container">
          <div className="col-md-8 col-lg-6 mx-auto text-center">
            <h2 className="fs-2 fw-bold mb-3">Subscribe to Our Newsletter</h2>
            <p className="fs-5 mb-4">Get the latest updates on new products and upcoming deals.</p>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="form-control form-control-lg"
              />
              <Button className="text-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;