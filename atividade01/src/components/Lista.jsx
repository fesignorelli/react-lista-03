export default function Lista({ propsLista }) {
    return (
        <div>
            <ul>
                {propsLista.map(
                    (itemDaLista) => (
                        <li>{itemDaLista}</li>
                    )
                )}
            </ul>
        </div>
    )
}