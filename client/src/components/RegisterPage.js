import React, { Component } from 'react'

class RegisterPage extends Component {
    constructor() {
        super()
        this.newUser = [];
        this.firstNameInput = React.createRef()
        this.lastNameInput = React.createRef()
        this.userNameInput = React.createRef()
        this.passwordInput = React.createRef()
    }
    async handleRegisterSubmit(event) {
        event.preventDefault();
        const firstName = this.userNameInput.current.value;
        const lastName = this.lastNameInput.current.value;
        const userName = this.userNameInput.current.value;
        const password = this.passwordInput.current.value;
        this.state=({
            newUser : firstName,lastName,userName, password 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleRegisterSubmit(event)}>
                    <h2>register</h2>
                    <input type="text" ref={this.firstNameInput}>first name</input>
                    <input type="text" ref={this.lastNameInput}>last name</input>
                    <input type="text" ref={this.userNameInput}>user name</input>
                    <input type="text" ref={this.passwordInput}>password</input>
                </form>
            </div>
        )
    }

}

export default RegisterPage
