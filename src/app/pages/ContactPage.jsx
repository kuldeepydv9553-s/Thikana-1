import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { LocationMap } from '../../components/map/LocationMap'
import { restaurantInfo } from '../../data/restaurant'
import { getDirectionsUrl } from '../../lib/maps'

export function ContactPage() {
  return (
    <div className="container page-shell contact-shell">
      <div className="page-header narrow-heading">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1>Plan your next dinner with us.</h1>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-item">
            <MapPin size={18} />
            <span>{restaurantInfo.address}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>{restaurantInfo.phone}</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>{restaurantInfo.email}</span>
          </div>
          <div className="contact-item">
            <Clock3 size={18} />
            <span>{restaurantInfo.status}</span>
          </div>
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary block-button"
          >
            Get Directions
          </a>
        </div>

        <div className="map-card">
          <LocationMap />
        </div>
      </div>
    </div>
  )
}
