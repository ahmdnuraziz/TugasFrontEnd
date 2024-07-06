import { useState } from "react";
import styles from "./Hero.module.css";
import { useEffect } from "react";
import { ENDPOINTS } from "../../utils/endpoints";
import axios from "axios";
function Hero() {
    const [dataApi, setDataApi] = useState(null);
    const VideoUrl = dataApi && dataApi.videos.results.length > 0 ? `https://www.youtube.com/watch?v=${dataApi.videos.results[0].key}` : '';

    useEffect(() => {
        const fetchDetails = async () => {
            const trendingMovie = await getTrending();
            if (trendingMovie) {
                await getDetail(trendingMovie.id);
            }
        };

        fetchDetails();
    }, []);

    const getTrending = async () => {
        try {
            const response = await axios.get(ENDPOINTS.TRENDING);
            if (response.status === 200) {
                const movies = response.data.results;
                return movies[Math.floor(Math.random() * movies.length)];
            } else {
                console.error(`Error: ${response.status_message}`);
            }
        } catch (error) {
            console.error("Error fetching trending movie:", error);
        }
    };

    const getDetail = async (id) => {
        try {
            const response = await axios.get(ENDPOINTS.DETAIL(id));
            if (response.status === 200) {
                setDataApi(response.data);
            } else {
                console.error(`Error: ${response.status_message}`);
            }
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{dataApi?.title}</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: {dataApi?.genres.map(genre => genre.name).join(', ')}
                    </h3>
                    <p className={styles.hero__description}> {dataApi?.overview}
                    </p>
                    <a href={VideoUrl} target="_blank" className={styles.hero__button}>Watch</a>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src={`https://image.tmdb.org/t/p/w500${dataApi?.poster_path}`}
                        alt={dataApi?.Title}
                    />
                </div>
            </section>
        </div>
    );
}
export default Hero;