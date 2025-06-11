import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz';
import Leaderboard from './Leaderboard';
import Quizzes from './Quizzes';


function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<Home />} />

          {/* Footer  */}
          <Route path="/contact" element={<Home />} />
          <Route path="/privacy-policy" element={<Home />} />
          <Route path="/terms-of-service" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App