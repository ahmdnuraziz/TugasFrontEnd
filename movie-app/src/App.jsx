// import './App.css'

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import Populer from "./Pages/Populer";
import NowPlay from "./Pages/NowPlay";
import TopRated from "./Pages/TopRated";
import CreadMovie from "./Pages/AddMovie";
import { useState } from "react";
import MovieContext from "./components/Context/MoviesContext";
import Detail from "./Pages/Detail";
// import Detail from "./Pages/Detail";

function App() {
  const [movieData, setMovieData] = useState([]);
  const valueContext = {
    movieData,
    setMovieData
  };

  return (
    <MovieContext.Provider value={valueContext}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={<About />}></Route> */}
          <Route path='/add-movie' element={<CreadMovie />} />
          <Route path='/populer' element={<Populer />} />
          <Route path='/now-play' element={<NowPlay />} />
          <Route path='/top-rated' element={<TopRated />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </Layout>
    </MovieContext.Provider>
  );
}

export default App;
