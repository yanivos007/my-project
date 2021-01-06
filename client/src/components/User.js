import React, { Component } from 'react'

 class User extends Component {
     constructor(props){
         super(props)
         this.state={
        users:[]
         }
     }
     componentDidMount(){
         this.fetchUsers();
     }

     async fetchUsers(){
         const response = await fetch('/api/users');
         const results = await response.json();
         this.setState({
            users : results
         })
     }
    render() {
        const singleUser = this.props;
        return (

            <div>
                {singleUser.map(
                    u=> <div>
                        
                    </div>
                )}
            </div>
        )
    }
}

export default User
