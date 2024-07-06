import { useParams } from "react-router-dom";
import Main from "../components/Main";
import DetailMovie from "../components/Movies/DetailMovie";
import Movies from "../components/Movies/Movies";
import { useContext, useEffect } from "react";
import MovieContext from "../components/Context/MoviesContext";
import axios from "axios";
import { ENDPOINTS } from "../utils/endpoints";

const Detail = () => {
    const params = useParams();
    const { movieData, setMovieData } = useContext(MovieContext);

    useEffect(() => {
        const GetData = async () => {
            try {
                const response = await axios.get(ENDPOINTS.RECOMENDED(params.id));
                console.log('cek Data', response);
                setMovieData(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        GetData();
    }, [setMovieData]);

    return (
        <Main>
            <DetailMovie params={params} />
            <Movies movieData={movieData} setMovieData={setMovieData} />
        </Main>
    );
}

export default Detail;
