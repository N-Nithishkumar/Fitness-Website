import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home as HomeIcon, User, ShoppingBag, PieChart } from 'lucide-react';
import './index.css';

import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import StorePage from './pages/Store';
import ProfilePage from './pages/Profile';
import WorkoutPage from './pages/Workout';
import ProgressPage from './pages/Progress';
import NutritionPage from './pages/Nutrition';
import CalculatorsPage from './pages/Calculators';
import MaxAIPage from './pages/MaxAI';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import OnboardingPage from './pages/Onboarding';

const Navbar = () => (
  <nav className="desktop-nav" style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '1rem 2rem', 
    background: 'var(--card-bg)',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)' }}>MAX</div>
    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/workout">Workout</Link></li>
      <li><Link to="/nutrition">Nutrition</Link></li>
      <li><Link to="/progress">Analytics</Link></li>
      <li><Link to="/calculators">Calculators</Link></li>
      <li><Link to="/ai">Max AI</Link></li>
      <li><Link to="/store">Store</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
);

const BottomNav = () => (
  <div style={{
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'var(--card-bg)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  }} className="mobile-nav">
    <Link to="/"><HomeIcon /></Link>
    <Link to="/dashboard"><PieChart /></Link>
    <Link to="/store"><ShoppingBag /></Link>
    <Link to="/profile"><User /></Link>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <BottomNav />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/workout" element={<WorkoutPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/ai" element={<MaxAIPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
