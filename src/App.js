import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Loginpage from "./Loginpage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} /> {/* Dynamic Route */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/reviews" element={<Movies />} />
        </Routes>
        </Router>
        
  );
};

export default App;