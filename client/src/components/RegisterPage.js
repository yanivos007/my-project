import React, { Component } from 'react'

class RegisterPage extends Component {
    constructor() {
        super()
        this.newUser = [];
        this.firstNameInput = React.createRef()
        this.lastNameInput = React.createRef()
        this.userNameInput = React.createRef()
        this.passwordInput = React.createRef()

        this.state ={
            users: []
        }
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
            <div  className="register-page">
                <form action="POST" onSubmit={(event) => this.handleRegisterSubmit(event)}>
                    
                    <h2>register</h2>
                    <div>
                    <input type="text" required={true} placeholder="first name" ref={this.firstNameInput} />
                    <br />
                    <input type="text" required={true} placeholder="last name" ref={this.lastNameInput} />
                    <br />
                    <input type="text" required={true} placeholder="user name" ref={this.userNameInput} />
                    <br />
                    <input type="password" required={true} placeholder="password" ref={this.passwordInput} />
                    <br />
                    <input type="submit"/>
                    </div>
                </form>
              
            </div>
            
        )
    }

}

export default RegisterPage
