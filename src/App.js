import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Book from './page/Book';
import DestinationPage from './page/DestinationPage';
import HomePage from './page/HomePage';
import TravelPage from './page/TravelPage';
import Views from './page/Views';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="destination" element={<DestinationPage/>}/>
        <Route path="travel" element={<TravelPage/>}/>
        <Route path="view" element={<Views/>}/>
        <Route path="book" element={<Book/>}/>

      </Routes>
    </Router>
  );
}

export default App;
