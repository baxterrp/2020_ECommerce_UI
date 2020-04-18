import React from 'react';

class LoginForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const loginRequest = {
          "email": event.target.email.value,
          "password": event.target.password.value
      }

      fetch('http://localhost:15000/user/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(loginRequest)
      }).then((response) => response.json().then((data) => {
          console.log(data.user);
      }));
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Enter Email</label>
          <input id="email" name="email" type="text" />
  
          <label htmlFor="password">Enter your password</label>
          <input id="password" name="password" type="password" />
  
          <button>Login</button>
        </form>
      );
    }
  }

  export default LoginForm;