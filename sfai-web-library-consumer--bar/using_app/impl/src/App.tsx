import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { CalendarPage } from "sfai-library-calendar";

const App: React.FC = () => {
    
  console.log("Hello world to Consumer module");

  return (
    <Router>
      <div className="content-wrapper">
          
          
        <CalendarPage/>
          
      </div>
    </Router>
  );
};

export default App;
