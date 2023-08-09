import { Component } from "react";

export class TodoForm extends Component {

    state = {
        name: '',
        tag:''
    }

    handleChange = e => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Імя
                    <input type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange} />
                </label>

                <label>
                    Прізвище
                <input type='text'
                        name='tag'
                        value={this.state.tag}
                        onChange={this.handleChange} />
                </label>

                <button type='submit'>Відправити</button>
            </form>
        )
    }
}