import styles from "./Movies.module.css";
import dataMovies from "../../utils/movies";
import { useState } from "react";
import { useEffect } from "react";
import Movie from "./movie";

function Movies() {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        setMovieData(dataMovies);
    }, [])
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {movieData.map((Mdata) => (

                        <Movie key={Mdata.id} data={Mdata} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Movies