import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { menuCategories, menuItems, menuFilters } from '../../data/menu'
import { MenuCard } from '../../components/menu/MenuCard'

export function MenuPage({ addToCart }) {
  const [category, setCategory] = useState('All')
  const [diet, setDiet] = useState('All')
  const [spice, setSpice] = useState('All')
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesDiet = diet === 'All' || item.diet === diet
      const matchesSpice = spice === 'All' || item.spice === spice
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesDiet && matchesSpice && matchesQuery
    })
  }, [category, diet, spice, query])

  return (
    <div className="container page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Signature menu</p>
          <h1>Menu crafted for every mood.</h1>
        </div>
      </div>

      <div className="menu-controls">
        <label className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search dishes"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="filter-setting">
          <span>Category</span>
          <div className="chip-row">
            {menuCategories.map((option) => (
              <button
                key={option}
                type="button"
                className={`chip ${category === option ? 'active' : ''}`}
                onClick={() => setCategory(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-setting">
          <span>Diet &amp; spice</span>
          <div className="chip-row">
            {menuFilters.map((option) => (
              <button
                key={option}
                type="button"
                className={`chip ${diet === option || spice === option ? 'active' : ''}`}
                onClick={() => {
                  if (['Vegetarian', 'Non-Vegetarian', 'Vegan'].includes(option)) {
                    setDiet(option)
                  } else {
                    setSpice(option)
                  }
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="menu-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <MenuCard key={item.id} item={item} addToCart={addToCart} />)
        ) : (
          <div className="empty-menu">
            <p>No dishes match that combination yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
