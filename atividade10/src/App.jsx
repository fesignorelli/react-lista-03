import React from 'react';
import ImageGallery from './components/ImageGallery';

export default function App () {
    const imageData = [
        { url: 'https://i.pinimg.com/enabled_lo/564x/71/a4/9e/71a49e9d838c9f8a770dc66f387e8c6b.jpg', altText: 'Imagem 1' },
        { url: 'https://i.pinimg.com/564x/40/7b/21/407b218f0dc95c32aeddaad496d25f17.jpg', altText: 'Imagem 2' },
        { url: 'https://i.pinimg.com/564x/1d/e9/38/1de938ec84b348b7de0a165ed8d84f80.jpg', altText: 'Imagem 3' },
    ];

    return (
        <div>
            <h1>Galeria de Imagens</h1>
            <ImageGallery images={imageData}></ImageGallery>
        </div>
    );
}
