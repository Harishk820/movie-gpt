import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {

  const trailerVideo = useSelector(store => store.movies.trailerVideo);
  // fetch video trailer & updating the store with trailer video data
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.result[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }
  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, [])

}

export default useMovieTrailer; 