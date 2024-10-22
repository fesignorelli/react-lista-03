import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Estudar React' },
        { id: 2, text: 'Fazer compras' },
        { id: 3, text: 'Ler um livro' },
    ]);

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => removeTask(task.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
