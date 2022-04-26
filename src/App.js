import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        password: 'react@auth',
        authorized: false
      };
      this.authorize = this.authorize.bind(this);
    }
  
    authorize(e) {
      const password = e.target.querySelector(
        'input[type="password"]').value;
      const auth = password === this.state.password;
      this.setState({
        authorized: auth
      });
    }
   
  
    render() {
      const login =(
        <form action='#' onSubmit={this.authorize}>
        <input type="password" placehoder="Password" />
        <input type="submit"/>
        </form>
      );
      const contactInfo =(
          <>
            <div className='mouse-img'>
                <img 
                src='images/mouse.jpg'
                alt='The mouse'
                width='100px' 
                height='auto' />
            </div>
        <ul>
            <li>
              Hello ! 
            </li>
            <li>
              Thank you for entering the correct passowrd and exposed me.
            </li>
          </ul>
        </>
      );
      return (
          <>
          <div className='heading'>
              <h2>Authorization example in React</h2>
              <p>This is an example to handle authorisation. Please type the password 'react@auth' to see the hidden details </p>
          </div>
          <div className='container'>            
            <div id="authorization" >
                <h1>{this.state.authorized ? 'You got it !' : 'Enter the Password'}</h1>  
                {this.state.authorized ? contactInfo : login}
            </div>            
          </div>
            
        </>
      );
    }
  }

export default App