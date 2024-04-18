import React from "react";
import "./App.css";
import resume from "../src/assets/resume.pdf" 
const App = () => {
  return (
    <div className="App">
      <div>
        <div className="Profile">Profile</div>
        <div className="Container">
          <div className="Hello">
            <div>
              Hello !🙋‍♀️
              <br />
              I'm Pradeesha
              <br />
              FrontEnd Developer
            </div>
            <a className="underline" href={resume} download="Pradeesha_Resume">
              <div className="Button">
                <button className="Button1">Download CV</button>
              </div>
            </a>
          </div>
          <div>
            <img className="Image" src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
