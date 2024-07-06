import { useEffect, useState } from "react";
import styles from "./Movies.module.css";
import axios from "axios";
import { ENDPOINTS } from "../../utils/endpoints";

const DetailMovie = (props) => {
    const { params } = props;
    const [dataApi, setDataApi] = useState(null);
    const VideoURL = dataApi && `https://www.youtube.com/watch?v=${dataApi.videos.results[0].key}`

    useEffect(() => {
        getDetail();
    }, [params.id]);

    const getDetail = async () => {
        const response = await axios.get(ENDPOINTS.DETAIL(params.id));

        if (response.status === 200) {
            setDataApi(response.data);
        } else {
            console.log(response.status_message);
        }
    }

    return (
        <div className={styles.detail}>
            <div className="poster">
                <img
                    src={dataApi && `${import.meta.env.VITE_IMAGE}/${dataApi.poster_path}`}
                    alt="Movie"
                />
            </div>
            <div className="info">
                <h2>{dataApi && dataApi.title}</h2>
                <h3>
                    Genre: {dataApi && dataApi.genres.map((genre, index) => (
                        <span key={index}>{genre.name}{index < dataApi.genres.length - 1 ? ', ' : ''}</span>
                    ))}
                </h3>
                <p>{dataApi && dataApi.overview}</p>
                <a href={VideoURL} target="_blank" className={styles.hero__button}>Watch</a>
            </div>
        </div>
    );
}

export default DetailMovie;