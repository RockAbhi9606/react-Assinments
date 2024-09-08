import { API_OPTIONS } from '../utils/constent';
import { addUpComingMovies } from '../redux/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useUpCommingMovies = () => {
    const dispatch = useDispatch();
    const upCommingMovies = useSelector(store => store.movies.upCommingMovies)

    useEffect(() => {
        !upCommingMovies && getUpCommingMovies();
    }, []);

    const getUpCommingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    };
}

export default useUpCommingMovies
