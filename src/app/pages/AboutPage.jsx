export function AboutPage() {
  return (
    <div className="container page-shell about-shell">
      <div className="page-header narrow-heading">
        <div>
          <p className="eyebrow">Our story</p>
          <h1>Celebrating taste, tradition and hospitality.</h1>
        </div>
      </div>

      <div className="story-split">
        <div className="story-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
            alt="Chef preparing a special evening spread"
          />
        </div>
        <div className="story-content">
          <p>
            Founded with the idea of offering warmth, ritual and elevated flavour, Thikana brings together family recipes with contemporary execution. Every dish is crafted to feel personal — a little indulgent, deeply comforting, and unmistakably memorable.
          </p>
          <div className="stats-grid">
            <div>
              <strong>12+</strong>
              <span>signature plates</span>
            </div>
            <div>
              <strong>8 yrs</strong>
              <span>curating dinners</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>guest rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
