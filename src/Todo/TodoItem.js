import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context/context'

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []
    if(todo.completed) {
        classes.push('done')
    }
    return (
        <li className="todo_item">
            <span className={classes.join(' ')}>
                <input 
                className="check" 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => 
                onChange(todo.id)} 
                />
                <strong className="id">{index + 1}</strong>
                {todo.title}
            </span>

            <button className="remove" onClick={() => removeTodo(todo.id)}>&times;</button> 
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem