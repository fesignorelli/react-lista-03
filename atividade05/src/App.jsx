import './App.css';
import Imagem from './components/Imagem';

function App() {
    const urls = [
        'https://i.pinimg.com/enabled_lo/564x/16/f9/4a/16f94ac8fd48a7eef0f9fa2b03cd9d33.jpg',
        '',
        'https://i.pinimg.com/enabled_lo/564x/f6/ad/93/f6ad93dd2fb81bff9f5d2f3aa2cdd283.jpg',
        null,
        'https://i.pinimg.com/enabled_lo/564x/e6/f9/eb/e6f9ebb0f2d6f5eacc72d81566fabf5d.jpg'
    ];

    return (
        <div>
            <h1>Galeria de Imagens</h1>
            <Imagem propsImageUrls={urls} />
        </div>
    );
}

export default App;
