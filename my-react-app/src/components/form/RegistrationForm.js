import { Component } from "react";

const INITIAL_STATE = {
    login: '',
    password: '',
}

export class RegistrationForm extends Component {

    state = {
        ...INITIAL_STATE
    }
    
    onSubmit = event => {
        event.preventDefault()
        const { login, password } = this.state;
        console.log(`Login ${login}`,`Password ${password}`)
    }

    onReset = () => {
        this.setState(INITIAL_STATE);
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {

        const { login, password } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Login
                    <input type="" name="login" onChange={this.handleChange} value={login}/>
                </label>
                <label>
                    Password
                    <input type="" name="password" onChange={this.handleChange} value={password}/>
                </label>
                <button type="submit">SUBMIT</button>
                <button type="button" onReset={this.onReset}>RESET</button>
            </form>
        )
    }
}