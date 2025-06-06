import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Whole Chicken',
    price: 12.99,
    description: 'Farm-fresh whole chicken, perfect for roasting or grilling. Raised without antibiotics.',
    image: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Whole Birds',
    weight: '3-4 lbs',
    inStock: true,
    features: ['Antibiotic-free', 'Free-range', 'Fresh daily']
  },
  {
    id: '2',
    name: 'Chicken Breast (Boneless)',
    price: 8.99,
    description: 'Premium boneless chicken breast, ideal for quick cooking and healthy meals.',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cuts',
    weight: '1 lb pack',
    inStock: true,
    features: ['Lean protein', 'Versatile', 'Fresh cut']
  },
  {
    id: '3',
    name: 'Chicken Thighs (Bone-in)',
    price: 6.99,
    description: 'Juicy bone-in chicken thighs with rich flavor, perfect for braising and roasting.',
    image: 'https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cuts',
    weight: '2 lb pack',
    inStock: true,
    features: ['Flavorful', 'Bone-in', 'Great for grilling']
  },
  {
    id: '4',
    name: 'Chicken Wings',
    price: 9.99,
    description: 'Fresh chicken wings, perfect for parties, game day, or family dinners.',
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cuts',
    weight: '2 lb pack',
    inStock: true,
    features: ['Party favorite', 'Crispy when cooked', 'Fresh daily']
  },
  {
    id: '5',
    name: 'Ground Chicken',
    price: 7.49,
    description: 'Fresh ground chicken, perfect for burgers, meatballs, and healthy cooking.',
    image: 'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Ground',
    weight: '1 lb pack',
    inStock: true,
    features: ['Lean', 'Versatile', 'Fresh ground']
  },
  {
    id: '6',
    name: 'Fresh Turkey (Whole)',
    price: 24.99,
    description: 'Premium whole turkey, perfect for holidays and special occasions.',
    image: 'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Turkey',
    weight: '12-14 lbs',
    inStock: true,
    features: ['Holiday special', 'Free-range', 'Antibiotic-free']
  },
  {
    id: '7',
    name: 'Duck (Whole)',
    price: 18.99,
    description: 'Premium whole duck with rich flavor, perfect for gourmet cooking.',
    image: 'https://images.pexels.com/photos/8477433/pexels-photo-8477433.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Specialty',
    weight: '4-5 lbs',
    inStock: true,
    features: ['Gourmet', 'Rich flavor', 'Premium quality']
  },
  {
    id: '8',
    name: 'Fresh Eggs (Dozen)',
    price: 4.99,
    description: 'Farm-fresh eggs from free-range hens, perfect for breakfast and baking.',
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Eggs',
    weight: '12 count',
    inStock: true,
    features: ['Free-range', 'Fresh daily', 'Rich taste']
  }
];