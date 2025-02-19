import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./HomePage";
import ToolsPage from "./Tools";
import AboutUsPage from "./AboutUs"; // Fixed incorrect import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} /> {/* Fixed path & component */}
      </Routes>
    </Router>
  );
}

export default App;




















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   return (
//     <>
//     <Routes>
//     <Route path ="./HomePage"element={<HomePage/>}/>
//     </Routes>
//    </>
//   )}

// export default App;



//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

