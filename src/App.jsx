import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Assessment from './pages/Assessment';
import { AssessmentProvider } from './context/AssessmentContext';

function App() {
  return (
    <AssessmentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </Router>
    </AssessmentProvider>
  );
}

export default App;
