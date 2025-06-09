import './App.css'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'

// function App() {

//   return (
//     <>
//       <Header />
//       <Hero />
//       <Footer /> 
//     </>
//   )
// }


function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Home />} />
          <Route path="/leaderboard" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App