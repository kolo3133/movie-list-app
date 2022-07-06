import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie.js"
import FilterButtons from "./components/FilterButtons.js";
import {motion} from "framer-motion";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"

function App() {
  const [trending, setTrending] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenere, setActiveGenere] = useState(0);

  //when components gets rendered then fetch trending data
  useEffect(() => {
    fetchTrending();
  }, []);

  // function that fetching data from API
  const fetchTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=b94ac5f7267bce61f077248a40a2a77e"
    );
    const movies = await data.json(); //parsing raw data into json
    console.log(movies);
    setTrending(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <h1>Top trending movies</h1>
      <FilterButtons trending={trending} setFiltered={setFiltered} activeGenere={activeGenere} setActiveGenere={setActiveGenere} />
      <AnimateSharedLayout>
      <motion.div layout className="trending-movies">
        <AnimatePresence>
        {filtered.map(movie => { //mapping each item in the array
          return <Movie key={movie.id} movie={movie} /> //each item return a movie component
        })}
        </AnimatePresence>
      </motion.div>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
