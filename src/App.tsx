// import React from 'react';
// import './App.css';
// import Greeting   from './test'; // Update the import path as needed

// function App() {
 
//   return (
//     <div className="App">
//       <Greeting EmpName="Aman Verma" EmpAge={30} EmpLocation="Gurgaon" />
//       </div>
//   );
// }

// export default App;








import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contaxt';
import Profile from './Profile';
import Protiviti from './MyProtiviti';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link><br/>
              {/* <Link to="/profile/Harmeet/123?age=30&city=Gurgaon">Profile</Link> */}
              

            </li>
            <li><Protiviti to="/aboutUs">Click Here</Protiviti></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/profile/:username/:EmpCode" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
