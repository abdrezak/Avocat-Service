import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import FileTracking from './page/page1/FileTracking';
import Top from './components/top/Top';
import Navbar from './components/Navbvar/Navbar';
import SignUpForm from './page/Page2/SignUpForm';
import RegisterForm from './page/Page3/RegisterForm';
import ContactInfo from './page/page4/ContactInfo';
import DossierCriminel from './page/page5/DossierCriminel'; 
import Bare from './components/contact/Bare';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [showTop, setShowTop] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/file-tracking" 
          element={
            <FileTracking showTop={showTop} onShowTop={() => setShowTop(true)} onHideTop={() => setShowTop(false)} />
          } 
        />
        {/* <Route path="/sooo" element={<Bare/>} /> */}
        <Route path="/sooo" element={<Sidebar/>} />
        
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<RegisterForm />} />
        <Route path="/momo" element={<ContactInfo />} />
        <Route path="/dossier" element={<DossierCriminel />} />
      </Routes>
    </Router>
  );
}

export default App;
