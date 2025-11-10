import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

function MediaGallery({ items }) {
  return (
    <div className="media-gallery">
      {items.map((item) => {
        return (
          <section key={item.id} className="media-section">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="media-section__image" />
            ) : (
              <YouTubeEmbed title={item.title} embedUrl={item.src} />
            )}
          </section>
        );
      })}
    </div>
  );
}

export default MediaGallery;

