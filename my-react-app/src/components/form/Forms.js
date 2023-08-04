import { Component } from "react";
import './Forms.css';
import PropTypes from 'prop-types';

export class Forms extends Component {

    handleSubmit = (event) => {
        event.preventDefault()

        const target = event.currentTarget;
        const loginInput = target.elements.login;
            if (loginInput) {
                console.log('Login', loginInput.value);
        }
        
        const passwordInput = target.elements.password;
            if (passwordInput) {
                console.log('Passwor', passwordInput.value);
        }

        const emailInput = target.elements.email;
            if (emailInput) {
                console.log('Email', emailInput.value);
        }
}

    render() {
        return (
        <>
            <form className="submit" onSubmit={this.handleSubmit}>
                <input type="text" name="login"/>
                    <input type="text" name="password" />
                    <input type="text" name="email"/>
                
                <button type='submit'>Submit</button>
            </form>
        </>
        )
    }
}

Forms.propTypes = {
    onSubmit: PropTypes.func
}