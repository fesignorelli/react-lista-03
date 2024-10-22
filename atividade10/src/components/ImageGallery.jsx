import React from 'react';

export default function ImageGallery ({ images }) {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image.url} 
                    alt={image.altText} 
                    style={{ width: '100%', height: 'auto', marginBottom: '10px' }} 
                />
            ))}
        </div>
    );
};
