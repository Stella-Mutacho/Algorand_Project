import React from 'react';
import "./App.css";
import Box from '@material-ui/core/Box';
import ButtonClick from "./button.js"
import Trainee from "./Trainee.js";
import Tutor from "./Tutor.js";
import Nav from "./Nav.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="Home" element={<Home/>} />
          <Route path="Tutor" element={<Tutor/>} />
          <Route path="Trainee" element={<Trainee/>} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>

    <h1> 10 Academy Home</h1>
    <h2>Home Page</h2>
    <h2> Enter your wallet ID</h2>
    <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}></div>

    <Box color="blue" bgcolor="palevioletred" p={1}>
      Enter
    </Box>
    <ButtonClick /> 
  </div>
);
export default App;