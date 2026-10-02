import { galleryImages } from '../../data/restaurant'

export function GalleryPage() {
  return (
    <div className="container page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Gallery</p>
          <h1>Moments from the dining room.</h1>
        </div>
      </div>
      <div className="gallery-page-grid">
        {galleryImages.map((image, index) => (
          <figure key={image} className={`gallery-page-card tile-${index + 1}`}>
            <img src={image} alt={`Thikana gallery ${index + 1}`} />
          </figure>
        ))}
      </div>
    </div>
  )
}
