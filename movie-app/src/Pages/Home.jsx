import { useContext, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Movies from "../components/Movies/Movies";
import dataMovies from "../utils/movies";
import MovieContext from "../components/Context/MoviesContext";

function Home() {
    const { movieData, setMovieData } = useContext(MovieContext);

    useEffect(() => {
        const GetData = async () => {
            try {
                setMovieData(dataMovies);
            } catch (error) {
                console.log(error);
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

export default Home;
