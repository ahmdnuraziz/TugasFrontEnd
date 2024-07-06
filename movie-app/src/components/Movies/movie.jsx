import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

const Movie = (movie) => {
    console.log(movie);
    const imageUrl = movie.data.poster_path
        ? `${import.meta.env.VITE_IMAGE}/${movie.data.poster_path}`
        : `${movie.data.poster}`;

    return (
        <Link to={`/detail/${movie.data.id}`} className={styles.movie}>
            <img
                className={styles.movie__image}
                src={imageUrl}
                alt="Movie"
            />
            <h3 className={styles.movie__title}>{movie.data.title}</h3>
            <p className={styles.movie__date}>{movie.data.date}</p>
        </Link>
    );
}

export default Movie;
