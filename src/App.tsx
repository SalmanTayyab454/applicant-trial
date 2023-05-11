import React, { useState } from "react";
import "./App.css";

function App() {

const[userName, setUserName] = useState('');
const[password, setPassword] = useState('');

  return (
    <div className="App">
        <div className="form-structor">
          <div className="signup">
            <h2 className="form-title" id="signup">
              <span>or</span>Login JUNE
            </h2>
            <div className="form-holder">
				<input 
					type="email" 
					className="input"
					placeholder="Email"  
					value={userName}
					onChange={(e)=> setUserName(e.target.value)}
				/>
				<input 
					type="password" 
					className="input"
					placeholder="Password"
					value={password}
					onChange={(e)=> setPassword(e.target.value)}
				/>
            </div>
            <button type="submit" className="submit-btn">Sign In</button>
          </div>
          <div className="login slide-up">
            <div className="center">
              <h2 className="form-title">
                Hand Crafted by Salman
              </h2>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
