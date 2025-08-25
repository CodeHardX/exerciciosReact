function ListaTarefas(){
const tarefas =[
    {id:1, nome: 'Estudar React'},
    {id:2, nome: 'Fazer o PI'},
    {id:3, nome: 'Tomar o café' }
];

    return(
        <div>
            <nav>
                <ul>
                    {tarefas.map(lista => <li key={lista.id}>{lista.nome}</li>)}
                </ul>
            </nav>
        </div>
    );
}

export default ListaTarefas;