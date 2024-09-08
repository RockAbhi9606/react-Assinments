import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../redux/moviesSlice';
import { API_OPTIONS } from '../utils/constent';
import { useEffect } from 'react';

const useGetMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const fetchTrailerVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
            API_OPTIONS
        );

        const json = await data.json();
        const filterData = json?.results?.filter((video) => video?.type === "Trailer");
        const trailer = filterData?.length > 0 ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        fetchTrailerVideo();
    }, []);
}

export default useGetMovieTrailer
