import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Leaf, Sparkles, Star, UtensilsCrossed } from 'lucide-react'
import { featuredItems } from '../../data/menu'
import { galleryImages, testimonials } from '../../data/restaurant'
import { MenuCard } from '../../components/menu/MenuCard'

export function HomePage({ addToCart }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Modern Indian dining · Bareilly</p>
            <h1>Where elevated flavours meet warm hospitality.</h1>
            <p className="lead">
              Thoughtful plates, slow evenings, and a vibrant dining room designed for celebrations,
              business dinners, and memorable meals with loved ones.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                Explore Menu
              </Link>
              <Link to="/reservation" className="btn btn-secondary">
                Reserve a Table
              </Link>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>12+</strong>
                <span>Signature plates</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Guest rating</span>
              </div>
              <div>
                <strong>25 min</strong>
                <span>Average service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The experience</p>
            <h2>Crafted for long conversations and memorable evenings.</h2>
          </div>
        </div>

        <div className="highlights-grid">
          <div className="info-card">
            <div className="icon-wrap"><Sparkles size={20} /></div>
            <h3>Chef-led tasting</h3>
            <p>Seasonal menus shaped around the finest local produce and slow-cooked classics.</p>
          </div>
          <div className="info-card">
            <div className="icon-wrap"><Leaf size={20} /></div>
            <h3>Curated ingredients</h3>
            <p>Thoughtful sourcing and balanced spice profiles for a rich, layered finish.</p>
          </div>
          <div className="info-card">
            <div className="icon-wrap"><UtensilsCrossed size={20} /></div>
            <h3>Warm hospitality</h3>
            <p>Elegant service with a beautifully intimate atmosphere built for gatherings.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Signature selection</p>
            <h2>Curated plates for your table.</h2>
          </div>
          <Link to="/menu" className="inline-link">
            View Full Menu <ChevronRight size={16} />
          </Link>
        </div>

        <div className="featured-grid">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <section className="section muted-section">
        <div className="container story-grid">
          <div className="story-copy">
            <p className="eyebrow">Why Thikana</p>
            <h2>Elegant restraint. Memorable flavour.</h2>
            <p>
              Inspired by classic Indian kitchens and playful modern plating, we serve dishes meant to be savoured slowly — layered with smoke, spice and seasonal ingredients.
            </p>
            <div className="feature-list">
              <div>
                <Sparkles size={20} />
                <span>Chef-led tasting menus</span>
              </div>
              <div>
                <Leaf size={20} />
                <span>Seasonal ingredients</span>
              </div>
              <div>
                <UtensilsCrossed size={20} />
                <span>Warm international service</span>
              </div>
            </div>
          </div>

          <div className="story-visual">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Dining experience at Thikana"
            />
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Guest notes</p>
            <h2>Dining experiences worth returning for.</h2>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((review) => (
            <article key={review.name} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>
              <p>“{review.quote}”</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-preview container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>A space built for slow evenings.</h2>
          </div>
          <Link to="/gallery" className="inline-link">
            View More <ChevronRight size={16} />
          </Link>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={image} className={`gallery-tile tile-${index + 1}`}>
              <img src={image} alt={`Restaurant gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
