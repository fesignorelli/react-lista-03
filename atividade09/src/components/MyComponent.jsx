export default function MyComponent() {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <>
            <h1>Título da Lista</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Parágrafo</p>
        </>
    );
};
