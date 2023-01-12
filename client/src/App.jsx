import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './components/All/All';

function App() {
  return (
    <Routes>
      <Route path="/" element={<All />} /> 
    </Routes>
  );
}

export default App;
