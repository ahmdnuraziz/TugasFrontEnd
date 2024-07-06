import { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Movies from "../components/Movies/Movies";
import { ENDPOINTS } from "../utils/endpoints";
import axios from "axios";
import MovieContext from "../components/Context/MoviesContext";

const TopRated = () => {
    const { movieData, setMovieData } = useContext(MovieContext);

    useEffect(() => {
        const GetData = async () => {
            try {
                const response = await axios.get(ENDPOINTS.TOPRATED);
                const movies = response.data.results;
                setMovieData(movies);
                console.log('cek Data', movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        GetData();
    }, [setMovieData]);

    return (
        <Main>
            <Hero />
            <Movies movieData={movieData} setMovieData={setMovieData} />
        </Main>
    );
}

export default TopRated;
