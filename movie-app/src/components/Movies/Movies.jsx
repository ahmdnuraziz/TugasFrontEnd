import { useEffect, useState } from "react";
import styles from "./Movies.module.css";
import Movie from "./movie";

function Movies(props) {
    const { movieData = [] } = props;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (movieData.length > 0 && movieData) {
            setLoading(false);
        }
        console.log('data terahir', movieData);
    }, [movieData]);
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                {loading ? <p>Loading...</p> : <div className={styles.movie__container}>
                    {movieData.map((Mdata) => (
                        <Movie key={Mdata.id} data={Mdata} />
                    ))}
                </div>}

            </section>
        </div>
    )
}

export default Movies;
