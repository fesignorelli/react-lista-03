import React from 'react';
import Card from './components/Card'; 

const App = () => {
    return (
        <div>
            <h1>Exemplo de Card</h1>
            <Card>
                <h2>Título do Card</h2>
                <p>Este é o conteúdo dentro do Card.</p>
            </Card>

            <Card>
                <p>Outro conteúdo em um Card diferente.</p>
            </Card>
        </div>
    );
}

export default App;
