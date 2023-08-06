import { Component } from "react";

const INITIAL_STATE = {
    login: '',
    password: '',
    agree: false,
    gender: null
}

const Gender = {
    MALE: 'male',
    FEMALE: 'female',
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
        const { name, value, type } = event.target;

        if (type === 'checkbox') {
            return this.setState((prevState => ({
                ...prevState, agree: event.target.checked
            })));
        }
        this.setState({ [name]: value });
    }

    render() {

        const { login, password, agree, gender } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Login
                    <input type="text"
                        name="login"
                        onChange={this.handleChange}
                        value={login} />
                </label>

                <label>
                    Password
                    <input type="text"
                        name="password"
                        onChange={this.handleChange}
                        value={password} />
                </label>

                <div>
                    <input type="checkbox"
                        name="agree"
                        checked={agree}
                        onChange={this.handleChange} />
                </div>

                <div>
                    <input type="radio"
                        name="gender"
                        checked={gender === Gender.MALE}
                        value={Gender.MALE}
                        onChange={this.handleChange} />
                </div>
                
                <button type="submit">SUBMIT</button>

                <button type="button" onClick={this.onReset}>RESET</button>
            </form>
        )
    }
}