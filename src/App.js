import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/rocket/Navbar';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';
import MyProfile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="mission" element={<Mission />} />
          <Route path="profile" element={<MyProfile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
