import './App.css';
import React, { useState } from 'react';
import Login from './Login'
import  MovieForm from './Movie'


const App = () => {
  const [loggedin, setLoggedin] = useState(false)

  return (
    <div>
      {loggedin?< MovieForm/>: <Login logged = {(loggedin) => setLoggedin(loggedin)} />}
     
    </div>
  );
};

// export default LoginPage;


export default App;
