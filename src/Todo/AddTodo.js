import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ onCreate }) => {

    const [value, setValue] = useState('')

    function submitHandler(e) {
        e.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="add" type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo