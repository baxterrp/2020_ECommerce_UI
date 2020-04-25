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

      fetch('https://localhost:15001/user/login', {
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
          <div className="row">
            <h2 className="h2 col-lg-12"><strong>Login</strong></h2>
          </div>
          <div className="row">
            <div className="col-lg-12">Before you can checkout you must login.</div>
          </div>			
          <div className="row">
            <div className="col-lg-12">Enter your login information here. If you do not have any login information, then <a href="/register">please proceed to our registration page.</a></div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">   
				      <div className="col-lg-3">
					      <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input id="email" name="email" type="text" className="form-control" />
                  </div>
			        	</div>
			        </div>
              <div className="row">   
				       <div className="col-lg-3">
					      <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input id="password" name="password" type="password" className="form-control" />
                </div>
			        </div>
			      </div>
            <div className="row">
              <div className="col-lg-6">
                <button className="btn btn-success">Login and Proceed to Checkout</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }

  export default LoginForm;