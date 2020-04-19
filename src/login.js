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
        <div>
          <div class="row">
            <h2 class="h2 col-lg-12"><strong>Login</strong></h2>
          </div>
          <div class="row">
            <div class="col-lg-12">Before you can checkout you must login.</div>
          </div>			
          <div class="row">
            <div class="col-lg-12">Enter your login information here. If you do not have any login information, then <a href="/register">please proceed to our registration page.</a></div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div class="row">   
				      <div class="col-lg-3">
					      <div class="form-group">
                  <label htmlFor="email">Email:</label>
                  <input id="email" name="email" type="text" class="form-control" />
                  </div>
			        	</div>
			        </div>
              <div class="row">   
				       <div class="col-lg-3">
					      <div class="form-group">
                  <label htmlFor="password">Password:</label>
                  <input id="password" name="password" type="password" class="form-control" />
                </div>
			        </div>
			      </div>
            <div class="row">
              <div class="col-lg-6">
                <button class="btn btn-success">Login and Proceed to Checkout</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }

  export default LoginForm;