import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Books from './pages/books';
import ManageBooks from './pages/ManageBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path='/edit/:id'  element={<ManageBooks />} />
          <Route exact path='/new'  element={<ManageBooks />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
