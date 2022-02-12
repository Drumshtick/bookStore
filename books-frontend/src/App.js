import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Books from './pages/Books';
import ManageBooks from './pages/ManageBooks';
import Nav from './components/Nav/Nav';
function App() {
  return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path='/manage'  element={<ManageBooks />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
