import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BookCard></BookCard>
    </div>
  );
}

export default App;
