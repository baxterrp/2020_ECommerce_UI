import React from 'react';

class RegistrationForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      console.log("Submitting");
      event.preventDefault();
      const loginRequest = {
          "email": event.target.email.value,
          "password": event.target.password.value,
          "firstName": event.target.firstName.value,
          "lastName": event.target.lastName.value,
          "phoneNumber": event.target.phoneNumber.value,
          "address": event.target.address.value,
          "state": event.target.state.value,
          "zipCode": event.target.zipCode.value,
          "city": event.target.city.value
      }

      fetch('http://localhost:15000/user/register', {
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
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="first">First Name</label>
                <input id="firstName" name="firstName" type="text" className="form-control" />          
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" className="form-control" />         
              </div>
            </div> 
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="form-group">
                  <label>Address: </label>
                  <input id="address" type="text" name="address" className="form-control" />
              </div>
			    	</div>	
            <div className="col-lg-4">
					    <div className="form-group">
					      <label>City: </label>
					      <input id="city" type="text" name="city" className="form-control" />
					    </div>
				    </div>				
            <div className="col-lg-1">
              <div className="form-group">
                <label>State: </label>
                <input id="state" type="text" name="state" className="form-control" />
              </div>
            </div>				
            <div className="col-lg-2">
              <div className="form-group">
                <label>Zip Code: </label>
                <input id="zipCode" type="text" name="zipCode" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
				    <div className="col-lg-3">
              <div className="form-group">
                <label>Phone: </label>
                <input id="phoneNumber" type="text" class="form-control" className = "phoneNumber" />
              </div>
				    </div>				
            <div className="col-lg-3">
              <div className="form-group">
                <label>Email: </label>
                <input id="email" type="text" class="form-control" className="email" />
              </div>
            </div>				
            <div className="col-lg-3">
              <div className="form-group">
                <label>Password: </label>
                <input id="password" type="password" class="form-control" className="password" />
              </div>
            </div>				
            <div className="col-lg-3">
              <div className="form-group">
                <label>Confirm Password: </label>
                <input id="confirm" type="password" className="form-control" />
              </div>
            </div>
			    </div>
          <div className="row">
            <div className="col-lg-6">
              <button className="btn btn-success">Register and Proceed to Checkout</button>
            </div>
          </div>
        </form>
      );
    }
  }

  export default RegistrationForm;