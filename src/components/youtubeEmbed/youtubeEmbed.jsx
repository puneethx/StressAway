import React from 'react'
import "./youtubeEmbed.scss"

const youtubeEmbed = ({ youtubeId }) => {
    return (
        <div className="video-container">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded Youtube Video"
            />
        </div>
    )
}

export default youtubeEmbed