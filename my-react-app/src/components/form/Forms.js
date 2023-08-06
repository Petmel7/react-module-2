import React, { Component } from "react";
import './Forms.css';
import PropTypes from 'prop-types';

export class Forms extends Component {
    state = {
        emailInput: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const target = event.currentTarget;

        const loginInput = target.elements.login.value;
        console.log(loginInput)
        
        const passwordInput = target.elements.password.value;
        console.log(passwordInput)

        const emailInput = target.elements.email.value;
        console.log(emailInput)
    }
    
    handleChange = event => {
        const emailInput = event.target.value;
        this.setState({
            emailInput
        });
    }

    render() {
        const { emailInput } = this.state;

        return (
        <>
            <form className="submit" onSubmit={this.handleSubmit}>
                <input type="text" name="login"/>
                <input type="text" name="password" />
                <input type="text" name="email" value={emailInput} onChange={this.handleChange}/>
                
                <button type='submit'>Submit</button>
            </form>
        </>
        )
    }
}

Forms.propTypes = {
    onSubmit: PropTypes.func
}
