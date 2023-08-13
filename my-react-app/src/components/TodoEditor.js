import { Component } from "react";

export class TodoEditor extends Component {

    state = {
    message: ''
    }
    
    hangleChange = event => {
        this.setState({
            message: event.currentTarget.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)

        this.props.onSubmit(this.state.message)
        this.setState({ message: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Додати
                    <textarea
                        value={this.state.message}
                        onChange={this.hangleChange}>
                    </textarea>
                </label>

                <button type="submit">Зберегти</button>
            </form>
        )
    }
}