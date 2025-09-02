import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import ProductCard from '../../components/ui/ProductCard';

// Mock data for demonstration
const products = [
  {
    id: 1,
    name: 'Organic Bananas',
    category: 'Fruits',
    price: 1.99,
    oldPrice: 2.49,
    discount: 20,
    rating: 4.5,
    stock: 50,
    weight: '1 kg',
    description: 'Sweet and nutritious organic bananas. Perfect for snacking, smoothies, or baking.',
    nutritionalInfo: {
      calories: 89,
      protein: '1.1g',
      carbs: '22.8g',
      fat: '0.3g',
      fiber: '2.6g'
    },
    images: [
      'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Great quality bananas, very fresh!', date: '2023-05-15' },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Good bananas, but a couple were bruised.', date: '2023-05-10' },
      { id: 3, user: 'Michael P.', rating: 5, comment: 'Perfect ripeness and great taste.', date: '2023-05-05' }
    ]
  },
  {
    id: 2,
    name: 'Fresh Milk',
    category: 'Dairy',
    price: 2.49,
    rating: 4.8,
    stock: 30,
    weight: '1 L',
    description: 'Fresh whole milk from grass-fed cows. Rich, creamy, and full of nutrients.',
    nutritionalInfo: {
      calories: 149,
      protein: '7.7g',
      carbs: '11.7g',
      fat: '8g',
      calcium: '276mg'
    },
    images: [
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    reviews: [
      { id: 1, user: 'Emma L.', rating: 5, comment: 'Best milk I\'ve ever had!', date: '2023-05-18' },
      { id: 2, user: 'Robert K.', rating: 5, comment: 'Very fresh and tasty.', date: '2023-05-12' }
    ]
  },
];

// Related products
const relatedProducts = [
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
    id: 8,
    name: 'Organic Eggs',
    category: 'Dairy',
    price: 3.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId) || products[0]; // Fallback to first product if not found
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-green-600">Home</a>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <a href="/products" className="text-gray-500 hover:text-green-600">Products</a>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <a href={`/categories/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-green-600">{product.category}</a>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-800 font-medium">{product.name}</li>
          </ol>
        </nav>
        
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="relative pb-[75%] overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${index === activeImageIndex ? 'ring-2 ring-green-500' : 'opacity-70'}`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating} ({product.reviews.length} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Availability:</span>
                  {product.stock > 0 ? (
                    <span className="text-green-600 font-medium">In Stock ({product.stock} available)</span>
                  ) : (
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Weight:</span>
                  <span className="text-gray-800">{product.weight}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Category:</span>
                  <a href={`/categories/${product.category.toLowerCase()}`} className="text-green-600 hover:underline">{product.category}</a>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity:</label>
                <div className="flex">
                  <button 
                    onClick={decrementQuantity}
                    className="bg-gray-200 px-3 py-2 rounded-l-md hover:bg-gray-300 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <input 
                    type="number" 
                    id="quantity" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    min="1" 
                    max={product.stock} 
                    className="w-16 text-center border-gray-200 focus:ring-green-500 focus:border-green-500"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="bg-gray-200 px-3 py-2 rounded-r-md hover:bg-gray-300 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth 
                  className="flex items-center justify-center"
                  disabled={product.stock === 0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex overflow-x-auto">
              <button 
                onClick={() => setActiveTab('description')}
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'description' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('nutritional')}
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'nutritional' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Nutritional Info
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'reviews' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Reviews ({product.reviews.length})
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              )}
              
              {activeTab === 'nutritional' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Nutritional Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 capitalize">{key}</p>
                        <p className="text-lg font-medium text-gray-800">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                  {product.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {product.reviews.map(review => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                                {review.user.charAt(0)}
                              </div>
                              <div className="ml-3">
                                <p className="font-medium text-gray-800">{review.user}</p>
                                <p className="text-sm text-gray-500">{review.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  viewBox="0 0 20 20" 
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No reviews yet.</p>
                  )}
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
                    <form>
                      <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <button 
                              key={i}
                              type="button"
                              className="text-gray-300 hover:text-yellow-400 focus:outline-none"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                        <textarea 
                          id="comment" 
                          rows="4" 
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                          placeholder="Share your experience with this product"
                        ></textarea>
                      </div>
                      <Button type="submit">Submit Review</Button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;