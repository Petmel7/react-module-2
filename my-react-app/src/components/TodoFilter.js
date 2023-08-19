import React from "react"

const TodoFilter = ({ value, onChange }) => {
    return (
        <div className="Search Form">
            <label className="label-Search">
                Пошук
                <input type='text'
                    value={value}
                    onChange={onChange} />
            </label>
        </div>
)
}

export default TodoFilter;