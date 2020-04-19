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
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label htmlFor="first">First Name</label>
                <input id="firstName" name="firstName" type="text" class="form-control" />          
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" class="form-control" />         
              </div>
            </div> 
          </div>
          <div class="row">
            <div class="col-lg-5">
              <div class="form-group">
                  <label>Address: </label>
                  <input id="address" type="text" name="address" class="form-control" />
              </div>
			    	</div>	
            <div class="col-lg-4">
					    <div class="form-group">
					      <label>City: </label>
					      <input id="city" type="text" name="city" class="form-control" />
					    </div>
				    </div>				
            <div class="col-lg-1">
              <div class="form-group">
                <label>State: </label>
                <input id="state" type="text" name="state" class="form-control" />
              </div>
            </div>				
            <div class="col-lg-2">
              <div class="form-group">
                <label>Zip Code: </label>
                <input id="zipCode" type="text" name="zipCode" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
				    <div class="col-lg-3">
              <div class="form-group">
                <label>Phone: </label>
                <input id="phoneNumber" type="text" class="form-control" name = "phoneNumber" />
              </div>
				    </div>				
            <div class="col-lg-3">
              <div class="form-group">
                <label>Email: </label>
                <input id="email" type="text" class="form-control" name="email" />
              </div>
            </div>				
            <div class="col-lg-3">
              <div class="form-group">
                <label>Password: </label>
                <input id="password" type="password" class="form-control" name="password" />
              </div>
            </div>				
            <div class="col-lg-3">
              <div class="form-group">
                <label>Confirm Password: </label>
                <input id="confirm" type="password" class="form-control" />
              </div>
            </div>
			    </div>
          <div class="row">
            <div class="col-lg-6">
              <button class="btn btn-success">Register and Proceed to Checkout</button>
            </div>
          </div>
        </form>
      );
    }
  }

  export default RegistrationForm;