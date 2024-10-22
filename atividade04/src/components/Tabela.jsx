export default function Tabela({propsTabela}) {
  return (
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
            {propsTabela.map(
                (item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.idade}</td>
                    </tr>
                )
            )}
        </table>

    </div>
  )
}

// const arrayObj = [
//     { id: 1, nome: "Fernanda", idade: 19 },
//     { id: 2, nome: "Gabriel", idade: 20 },
//     { id: 3, nome: "Davi", idade: 24 },
//   ]
