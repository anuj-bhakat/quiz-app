import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz';
import Leaderboard from './Leaderboard';
import Quizzes from './Quizzes';
import PrivacyPolicy from './PrivacyPolicy';
import About from './About';
import TermsOfService from './TermsOfService';
import ContactUs from './ContactUs';


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
          <Route path="/about" element={<About />} />

          {/* Footer  */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App