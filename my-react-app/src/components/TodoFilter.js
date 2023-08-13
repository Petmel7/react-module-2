import React from "react"

const TodoFilter = ({ value, onChange }) => {
    return (
        <label>
            Пошук
            <input type='text'
                value={value}
                onChange={onChange} />
        </label>
)
}

export default TodoFilter;