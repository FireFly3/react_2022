import React from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            <h3>{todo.id} - {todo.title}</h3>
            <p>Completed: {todo.completed.toString()}</p>
        </div>
    );
};

export {Todo};