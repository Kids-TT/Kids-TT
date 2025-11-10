import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

function MediaGallery({ items }) {
  return (
    <div className="media-gallery">
      {items.map((item) => {
        if (item.type === 'image') {
          return (
            <section key={item.id} className="media-section">
              <div className="media-section__image-wrapper">
                <img src={item.src} alt={item.alt} className="media-section__image" />
              </div>
            </section>
          );
        }

        return (
          <section key={item.id} className="media-section">
            <YouTubeEmbed title={item.title} embedUrl={item.src} />
          </section>
        );
      })}
    </div>
  );
}

export default MediaGallery;

