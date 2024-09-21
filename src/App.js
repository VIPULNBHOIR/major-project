import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import LandingPage from './screens/LandingPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Timeout to hide splash screen and show the landing page
    const timer = setTimeout(() => {
      setShowSplash(false); // After 3 seconds, hide splash screen
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  return (
    <Router>
      <div className="App">
        {showSplash ? (
          <SplashScreen /> // Show splash screen if showSplash is true
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Show landing page after splash screen */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
