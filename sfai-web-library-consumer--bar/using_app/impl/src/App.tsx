import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { FeatureFoobar } from "sfai-library-foo";

const App: React.FC = () => {
    
  console.log("Hello world to Consumer module");

  return (
    <Router>
      <div className="content-wrapper">
          Hello world to Consumer module
          
        <FeatureFoobar/>
          
      </div>
    </Router>
  );
};

export default App;
