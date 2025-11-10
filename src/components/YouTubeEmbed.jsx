import React from 'react';

function YouTubeEmbed({ title, embedUrl }) {
  return (
    <div className="media-section__video">
      <iframe
        title={title}
        src={embedUrl}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default YouTubeEmbed;

