import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Greeting from './components/Greeting.component';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Greeting />} />
  </Routes>
);

export default App;
