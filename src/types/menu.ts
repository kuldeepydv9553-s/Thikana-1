export type MenuCategory =
  | 'Starters'
  | 'Soups'
  | 'Main Course'
  | 'Breads'
  | 'Rice'
  | 'Desserts'
  | 'Beverages'

export type SpiceLevel = 'Mild' | 'Medium' | 'High' | 'None'

export type DietType = 'Non-Vegetarian' | 'Vegetarian' | 'Vegan'

export type MenuItem = {
  id: number
  slug: string
  name: string
  category: MenuCategory
  price: number
  diet: DietType
  spice: SpiceLevel
  image: string
  description: string
  ingredients: string[]
}
