import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Detail from "./Detail";
import { useEffect, useState } from "react";

const Router = () => {
    const [movies, setMovies] = useState([]);
    const [genres , setGenres] = useState()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mirafgan/PerfectJson/main/movie.json')
            .then(response => response.json())
            .then(data => {
                setMovies(data.data.movies);
                setGenres(data.data.genres);
            }) 
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App movies={movies} genres={genres} />} />
                <Route path="/movie/:id" element={<Detail  movies={movies} />} />
            </Routes>
        </HashRouter>
    );
};

export default Router;
