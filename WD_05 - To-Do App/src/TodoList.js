import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const [editText, setEditText] = useState('');

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch({ type: 'ADD_TODO', payload: { text: newTodo, completed: false } });
            setNewTodo('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const deleteTodo = index => {
        dispatch({ type: 'DELETE_TODO', payload: index });
    };

    const startEdit = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const updateTodo = () => {
        dispatch({ type: 'UPDATE_TODO', payload: { index: editIndex, text: editText } });
        setEditIndex(-1);
        setEditText('');
    };

    return (
        <div className='container col-4 border border-secondary container-fluid'>
            <div className='row'>
                <div className='col'>
                    <h2>Todo List</h2>
                    <input
                        type="text" className='form-control h4 col-lg-10 text-dark rounded border border-secondary p-1'
                        value={newTodo}
                        onChange={e => setNewTodo(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add something to do ..."
                    />
                </div>
                <div class='col mt-5'>
                    <button onClick={addTodo} type="button" className='h4 mx-2 mb-3 rounded btn btn-info'>Save</button>
                </div>
                <div>
                    {todos.map((todo, index) => (
                        <div key={index} className='h4 row'>
                            <div className='col-1'><input type='checkbox' /></div>
                            <div className='col-8' onClick={() => startEdit(index, todo.text)}>
                                {editIndex === index ? (
                                    <textarea
                                        type="text" className='h4'
                                        value={editText}
                                        onChange={e => setEditText(e.target.value)}>

                                    </textarea>
                                ) : (
                                    todo.text
                                )}
                            </div>
                            <div className='col'>
                                {editIndex === index ? (
                                    <div>
                                        <button className='btn btn-success' onClick={updateTodo}>Save</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button className='btn btn-danger float-end' onClick={() => deleteTodo(index)}>Remove</button>
                                    </div>
                                )}
                            </div>
                            <hr className='col-10 mx-3' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;