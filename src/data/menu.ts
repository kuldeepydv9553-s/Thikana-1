import type { MenuItem } from '../types/menu'

export const menuItems: MenuItem[] = [
  {
    id: 1,
    slug: 'tandoori-platter',
    name: 'Tandoori Platter',
    category: 'Starters',
    price: 460,
    diet: 'Non-Vegetarian',
    spice: 'Medium',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    description: 'A lively mix of smoky kebabs, charred vegetables and mint chutney.',
    ingredients: ['Chicken tikka', 'Paneer cubes', 'Mint chutney', 'Lemon wedges'],
  },
  {
    id: 2,
    slug: 'citrus-salad',
    name: 'Citrus Garden Salad',
    category: 'Starters',
    price: 320,
    diet: 'Vegetarian',
    spice: 'Mild',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
    description: 'Fresh greens, roasted beetroot and a lightly spiced orange dressing.',
    ingredients: ['Baby spinach', 'Beetroot', 'Orange segments', 'Citrus vinaigrette'],
  },
  {
    id: 3,
    slug: 'garden-soup',
    name: 'Garden Herb Soup',
    category: 'Soups',
    price: 260,
    diet: 'Vegan',
    spice: 'Mild',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    description: 'Silky coconut broth infused with local herbs and seasonal vegetables.',
    ingredients: ['Coconut milk', 'Pumpkin', 'Herbs', 'Leek'],
  },
  {
    id: 4,
    slug: 'butter-chicken',
    name: 'Butter Chicken',
    category: 'Main Course',
    price: 640,
    diet: 'Non-Vegetarian',
    spice: 'Medium',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
    description: 'Rich tomato gravy, mellow cream and a slow-cooked, house-spiced finish.',
    ingredients: ['Chicken', 'Tomato gravy', 'Cream', 'House masala'],
  },
  {
    id: 5,
    slug: 'paneer-tikka-masala',
    name: 'Paneer Tikka Masala',
    category: 'Main Course',
    price: 570,
    diet: 'Vegetarian',
    spice: 'Medium',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80',
    description: 'Charred cottage cheese in a velvety kasuri-methi gravy with roasted notes.',
    ingredients: ['Paneer', 'Tomato cream', 'Kasuri methi', 'Bell peppers'],
  },
  {
    id: 6,
    slug: 'garlic-naan',
    name: 'Garlic Naan',
    category: 'Breads',
    price: 160,
    diet: 'Vegetarian',
    spice: 'Mild',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    description: 'Fresh tandoor-baked naan brushed with garlic butter and herbs.',
    ingredients: ['Whole wheat flour', 'Garlic', 'Butter', 'Parsley'],
  },
  {
    id: 7,
    slug: 'saffron-biryani',
    name: 'Saffron Dum Biryani',
    category: 'Rice',
    price: 590,
    diet: 'Non-Vegetarian',
    spice: 'High',
    image:
      'https://images.unsplash.com/photo-1654922207993-2952fec328ae?auto=format&fit=crop&w=900&q=80',
    description: 'Fragrant long-grain rice layered with spices, herbs and tender morsels.',
    ingredients: ['Basmati rice', 'Chicken', 'Saffron', 'Whole spices'],
  },
  {
    id: 8,
    slug: 'gulab-jamun',
    name: 'Gulab Jamun',
    category: 'Desserts',
    price: 220,
    diet: 'Vegetarian',
    spice: 'None',
    image:
      'https://images.unsplash.com/photo-1631452180989-c6104b3ab3f6?auto=format&fit=crop&w=900&q=80',
    description: 'Warm, rose-scented dumplings dipped in saffron-infused syrup.',
    ingredients: ['Milk solids', 'Rose syrup', 'Saffron', 'Cardamom'],
  },
  {
    id: 9,
    slug: 'mango-lassi',
    name: 'Mango Lassi',
    category: 'Beverages',
    price: 180,
    diet: 'Vegetarian',
    spice: 'None',
    image:
      'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80',
    description: 'Creamy mango, yogurt and cardamom blended to a cool finish.',
    ingredients: ['Mango', 'Yogurt', 'Cardamom', 'Mint'],
  },
]

export const featuredItems = menuItems.slice(0, 5)
export const menuCategories = ['All', 'Starters', 'Soups', 'Main Course', 'Breads', 'Rice', 'Desserts', 'Beverages'] as const
export const menuFilters = ['All', 'Vegetarian', 'Non-Vegetarian', 'Vegan', 'Mild', 'Medium', 'High'] as const
