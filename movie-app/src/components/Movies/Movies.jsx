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

    const handleClick = () => {
        const addMovie ={ 
            id: 10,
            title:'the Matrik',
            date:'1987',
            image: 'https://picsum.photos/300/400'
        }
        setMovieData(prevMovies => [...prevMovies, addMovie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {movieData.map((Mdata) => (
                        <Movie key={Mdata.id} data={Mdata} />
                    ))}
                </div>
                <button onClick={handleClick}>Add Movie</button>
            </section>
        </div>
    )
}

export default Movies;
