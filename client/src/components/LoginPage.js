import React, { Component } from 'react'
import User from './User'

class LoginPage extends Component {
    constructor() {
        super()
        this.userNameInput = React.createRef()
        this.userpassword = React.createRef()
        this.state={
            users : [] 
        };
    }
    async onSubmitHandler(event) {
        event.preventDefault()
        const userName = this.userNameInput.current.value
        const password = this.userPassword.current.value
        const response = await fetch ('http://localhost:8080/api/users', {
            method : 'POST',
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify({userName, password})
        });
        const results = await response.json();
        this.setState({
            users: [...this.state.users, results]
        })
    }
    render() {
        
        const singleUser = this.state.users;
        return (
            <div className="login-page">
                <h2>login</h2>
                <form onSubmit={(event) => this.onSubmitHandler(event)}>
                    <div>
                       userName: <input type='text' required={true} placeholder="user name" ref={this.userNameInput} />
                        <br />
                        password: <input type='password' required={true} placeholder="password" ref={this.userPassword} />
                        <br />
                        <input type="submit" value="login" />
                    </div>
                </form>
                {singleUser.map(u => 
                 <User key={u.firstName} singleUser={u} /> ) 
                }
               
            </div>
        )
    }
}

export default LoginPage
