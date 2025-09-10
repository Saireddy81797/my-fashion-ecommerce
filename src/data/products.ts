export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  brand: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Midi Dress',
    price: 89.99,
    originalPrice: 129.99,
    description: 'A sophisticated midi dress perfect for both office and evening occasions. Made from premium cotton blend with a flattering silhouette.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'women',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Wine'],
    rating: 4.5,
    reviews: 127,
    inStock: true,
    featured: true,
    brand: 'ELEGANCE'
  },
  {
    id: '2',
    name: 'Classic Denim Jacket',
    price: 69.99,
    description: 'Timeless denim jacket with a modern fit. Perfect layering piece for any season.',
    images: [
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'women',
    subcategory: 'jackets',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    rating: 4.3,
    reviews: 89,
    inStock: true,
    featured: false,
    brand: 'DENIM CO'
  },
  {
    id: '3',
    name: 'Premium Leather Boots',
    price: 159.99,
    originalPrice: 199.99,
    description: 'Handcrafted leather boots with superior comfort and durability. Perfect for both casual and formal occasions.',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1058551/pexels-photo-1058551.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'women',
    subcategory: 'shoes',
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.8,
    reviews: 203,
    inStock: true,
    featured: true,
    brand: 'LEATHER CRAFT'
  },
  {
    id: '4',
    name: 'Casual Cotton T-Shirt',
    price: 24.99,
    description: 'Soft, breathable cotton t-shirt with a relaxed fit. Perfect for everyday wear.',
    images: [
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'men',
    subcategory: 'shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    rating: 4.2,
    reviews: 156,
    inStock: true,
    featured: false,
    brand: 'BASICS'
  },
  {
    id: '5',
    name: 'Designer Handbag',
    price: 199.99,
    originalPrice: 299.99,
    description: 'Luxurious designer handbag crafted from genuine leather. Spacious interior with multiple compartments.',
    images: [
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'accessories',
    subcategory: 'bags',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Beige', 'Red'],
    rating: 4.6,
    reviews: 94,
    inStock: true,
    featured: true,
    brand: 'LUXURY BAGS'
  },
  {
    id: '6',
    name: 'Athletic Sneakers',
    price: 89.99,
    description: 'High-performance athletic sneakers with advanced cushioning and support. Ideal for running and training.',
    images: [
      'https://images.pexels.com/photos/1058551/pexels-photo-1058551.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    category: 'men',
    subcategory: 'shoes',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['White', 'Black', 'Gray', 'Blue'],
    rating: 4.4,
    reviews: 267,
    inStock: true,
    featured: false,
    brand: 'SPORT TECH'
  }
];

export const categories = [
  { id: 'women', name: 'Women', subcategories: ['dresses', 'tops', 'bottoms', 'jackets', 'shoes'] },
  { id: 'men', name: 'Men', subcategories: ['shirts', 'pants', 'jackets', 'shoes'] },
  { id: 'accessories', name: 'Accessories', subcategories: ['bags', 'jewelry', 'watches', 'sunglasses'] }
];