// Mock data for development purposes

export const products = [
  {
    id: 1,
    name: 'Organic Bananas',
    category: 'Fruits',
    categoryId: 1,
    price: 1.99,
    discountPrice: 1.49,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Fresh organic bananas sourced from local farms. Rich in potassium and perfect for smoothies or a quick snack.',
    stock: 50,
    nutritionalInfo: {
      calories: 105,
      protein: '1.3g',
      carbs: '27g',
      fat: '0.4g',
      fiber: '3.1g'
    },
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Very fresh and tasty!', date: '2023-05-15' },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Good quality but ripened quickly.', date: '2023-05-10' }
    ]
  },
  {
    id: 2,
    name: 'Fresh Milk',
    category: 'Dairy',
    categoryId: 2,
    price: 2.49,
    discountPrice: null,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Farm-fresh whole milk. Pasteurized and homogenized for the best taste and quality.',
    stock: 30,
    nutritionalInfo: {
      calories: 149,
      protein: '8g',
      carbs: '12g',
      fat: '8g',
      fiber: '0g'
    },
    reviews: [
      { id: 3, user: 'Mike P.', rating: 5, comment: 'Best milk in town!', date: '2023-05-18' },
      { id: 4, user: 'Lisa R.', rating: 4.5, comment: 'Very creamy and fresh.', date: '2023-05-12' }
    ]
  },
  {
    id: 3,
    name: 'Whole Grain Bread',
    category: 'Bakery',
    categoryId: 3,
    price: 3.99,
    discountPrice: 3.49,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Freshly baked whole grain bread made with organic flour and seeds. High in fiber and protein.',
    stock: 15,
    nutritionalInfo: {
      calories: 80,
      protein: '4g',
      carbs: '15g',
      fat: '1g',
      fiber: '2g'
    },
    reviews: [
      { id: 5, user: 'David K.', rating: 5, comment: 'Delicious and stays fresh for days!', date: '2023-05-14' },
      { id: 6, user: 'Emma S.', rating: 4, comment: 'Good texture but a bit too many seeds for my taste.', date: '2023-05-11' }
    ]
  },
  {
    id: 4,
    name: 'Free-Range Eggs',
    category: 'Dairy',
    categoryId: 2,
    price: 4.99,
    discountPrice: null,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Farm-fresh free-range eggs from hens raised on organic feed without antibiotics or hormones.',
    stock: 40,
    nutritionalInfo: {
      calories: 70,
      protein: '6g',
      carbs: '0g',
      fat: '5g',
      fiber: '0g'
    },
    reviews: [
      { id: 7, user: 'Robert J.', rating: 5, comment: 'These eggs have the most vibrant yolks!', date: '2023-05-17' },
      { id: 8, user: 'Patricia L.', rating: 5, comment: 'Worth every penny. So much better than store brands.', date: '2023-05-13' }
    ]
  },
  {
    id: 5,
    name: 'Organic Spinach',
    category: 'Vegetables',
    categoryId: 4,
    price: 2.99,
    discountPrice: 2.49,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Fresh organic spinach leaves. Perfect for salads, smoothies, or cooking.',
    stock: 25,
    nutritionalInfo: {
      calories: 23,
      protein: '2.9g',
      carbs: '3.6g',
      fat: '0.4g',
      fiber: '2.2g'
    },
    reviews: [
      { id: 9, user: 'Jennifer B.', rating: 5, comment: 'Very fresh and lasts longer than other brands!', date: '2023-05-16' },
      { id: 10, user: 'Thomas H.', rating: 4, comment: 'Good quality but package is a bit small.', date: '2023-05-09' }
    ]
  },
  {
    id: 6,
    name: 'Grass-Fed Ground Beef',
    category: 'Meat',
    categoryId: 5,
    price: 8.99,
    discountPrice: null,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Premium grass-fed ground beef. Hormone and antibiotic-free.',
    stock: 20,
    nutritionalInfo: {
      calories: 250,
      protein: '26g',
      carbs: '0g',
      fat: '15g',
      fiber: '0g'
    },
    reviews: [
      { id: 11, user: 'Michael C.', rating: 5, comment: 'Excellent quality meat with great flavor!', date: '2023-05-18' },
      { id: 12, user: 'Susan T.', rating: 4.5, comment: 'Very lean and cooks well.', date: '2023-05-14' }
    ]
  },
  {
    id: 7,
    name: 'Organic Avocados',
    category: 'Fruits',
    categoryId: 1,
    price: 2.49,
    discountPrice: 1.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Perfectly ripe organic avocados. Rich in healthy fats and perfect for guacamole or toast.',
    stock: 35,
    nutritionalInfo: {
      calories: 240,
      protein: '3g',
      carbs: '12g',
      fat: '22g',
      fiber: '10g'
    },
    reviews: [
      { id: 13, user: 'Karen W.', rating: 4, comment: 'Good quality but some were not ripe enough.', date: '2023-05-15' },
      { id: 14, user: 'Brian M.', rating: 5, comment: 'Perfect ripeness and great taste!', date: '2023-05-12' }
    ]
  },
  {
    id: 8,
    name: 'Organic Honey',
    category: 'Pantry',
    categoryId: 6,
    price: 6.99,
    discountPrice: null,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Pure organic honey sourced from local beekeepers. Raw and unfiltered.',
    stock: 15,
    nutritionalInfo: {
      calories: 64,
      protein: '0g',
      carbs: '17g',
      fat: '0g',
      fiber: '0g'
    },
    reviews: [
      { id: 15, user: 'Laura N.', rating: 5, comment: 'Best honey I\'ve ever tasted!', date: '2023-05-17' },
      { id: 16, user: 'Steven G.', rating: 5, comment: 'Love supporting local beekeepers. Great product!', date: '2023-05-13' }
    ]
  },
  {
    id: 9,
    name: 'Atlantic Salmon Fillet',
    category: 'Seafood',
    categoryId: 7,
    price: 12.99,
    discountPrice: 10.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Fresh Atlantic salmon fillet. Rich in omega-3 fatty acids and perfect for grilling or baking.',
    stock: 10,
    nutritionalInfo: {
      calories: 208,
      protein: '20g',
      carbs: '0g',
      fat: '13g',
      fiber: '0g'
    },
    reviews: [
      { id: 17, user: 'Daniel F.', rating: 5, comment: 'Incredibly fresh and delicious!', date: '2023-05-16' },
      { id: 18, user: 'Michelle P.', rating: 4, comment: 'Good quality but a bit pricey.', date: '2023-05-11' }
    ]
  },
  {
    id: 10,
    name: 'Organic Quinoa',
    category: 'Grains',
    categoryId: 8,
    price: 5.49,
    discountPrice: null,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Organic white quinoa. High in protein and fiber, perfect for salads and side dishes.',
    stock: 30,
    nutritionalInfo: {
      calories: 120,
      protein: '4g',
      carbs: '21g',
      fat: '2g',
      fiber: '3g'
    },
    reviews: [
      { id: 19, user: 'Jessica L.', rating: 4.5, comment: 'Great quality and cooks perfectly!', date: '2023-05-18' },
      { id: 20, user: 'William R.', rating: 4.5, comment: 'Good value for organic quinoa.', date: '2023-05-14' }
    ]
  },
  {
    id: 11,
    name: 'Organic Blueberries',
    category: 'Fruits',
    categoryId: 1,
    price: 4.99,
    discountPrice: 3.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Sweet and juicy organic blueberries. Packed with antioxidants and perfect for snacking or baking.',
    stock: 20,
    nutritionalInfo: {
      calories: 84,
      protein: '1.1g',
      carbs: '21g',
      fat: '0.5g',
      fiber: '3.6g'
    },
    reviews: [
      { id: 21, user: 'Amanda S.', rating: 5, comment: 'So sweet and fresh!', date: '2023-05-17' },
      { id: 22, user: 'Richard T.', rating: 4, comment: 'Good quality but package could be larger.', date: '2023-05-13' }
    ]
  },
  {
    id: 12,
    name: 'Extra Virgin Olive Oil',
    category: 'Pantry',
    categoryId: 6,
    price: 9.99,
    discountPrice: null,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Premium cold-pressed extra virgin olive oil. Perfect for cooking, dressing, and dipping.',
    stock: 25,
    nutritionalInfo: {
      calories: 120,
      protein: '0g',
      carbs: '0g',
      fat: '14g',
      fiber: '0g'
    },
    reviews: [
      { id: 23, user: 'Nicole W.', rating: 5, comment: 'Excellent flavor and quality!', date: '2023-05-16' },
      { id: 24, user: 'Christopher B.', rating: 4.5, comment: 'Great olive oil for everyday use.', date: '2023-05-12' }
    ]
  }
];

export const categories = [
  {
    id: 1,
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 3
  },
  {
    id: 2,
    name: 'Dairy',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 2
  },
  {
    id: 3,
    name: 'Bakery',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 1
  },
  {
    id: 4,
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 1
  },
  {
    id: 5,
    name: 'Meat',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 1
  },
  {
    id: 6,
    name: 'Pantry',
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 2
  },
  {
    id: 7,
    name: 'Seafood',
    image: 'https://images.unsplash.com/photo-1565280654386-361523a8583d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 1
  },
  {
    id: 8,
    name: 'Grains',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1c5a6ec32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    productCount: 1
  }
];

export const promotions = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Get up to 30% off on fresh fruits and vegetables',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/products?category=fruits'
  },
  {
    id: 2,
    title: 'Organic Week',
    description: 'Special discounts on all organic products',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/products?filter=organic'
  },
  {
    id: 3,
    title: 'Free Delivery',
    description: 'On orders above $50',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/products'
  }
];