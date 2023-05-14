import React, { useState } from "react";
import Services from './services/index';
import "./App.css";

function App() {

  const[username, setUserName] = useState('');
  const[password, setPassword] = useState('');
  const[token, setToken] = useState('');
  const services = Services({ username, password });

  const handleLogin = async(e:any) => {
    e.preventDefault();

    try{
      const response = await services.login();
      setToken(response);
      console.log("token",token);
    }catch(error){
      console.log("Error in the catch",error);
    }

    
};

  return (
    <div className="App">
        <div className="form-structor">
          <form onSubmit={handleLogin}>
            <div className="signup">
              <h2 className="form-title" id="signup">
                <span>or</span>Login JUNE
              </h2>
            <div className="form-holder">
              <input 
                type="email" 
                className="input"
                placeholder="Email"  
                value={username}
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
              <button 
                type="submit"
                className="submit-btn">Sign In
              </button>
            </div>
          </form>
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
