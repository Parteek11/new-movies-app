import { useState,Fragment,useEffect } from "react";
import axios from 'axios';
import MovieItem from "./MovieItem";
import classes from './Movies.module.css';
const Movies=()=>{
    const [moviesList, setmoviesList]=useState([]);
    const [searchText, setsearchText] = useState("")
    const posterPath ='https://image.tmdb.org/t/p/w300';
   
    const fetchMovies = async () => {
        try {
          if(searchText===""){
            var url=  `https://api.themoviedb.org/3/discover/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085`;
          }
          else{
            url=`https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US&query=${searchText}`;
          }
          const { data } = await axios.get(url);
          setmoviesList(data.results);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        fetchMovies();
    }, [searchText])

    
    const movies=moviesList.map( movie =>(
        <MovieItem
        key={movie.id}
        movie={movie}
        title={movie.title}
        rating={'Rating: '+movie.vote_average}
        overview={movie.overview}
        imgPath={posterPath+movie.poster_path}
        />
    ));

 return <Fragment>
            <form className={classes.example+" "+classes.movies}>
                <input type="text" placeholder="Search.." name="search" onChange={(e)=>setsearchText(e.target.value)}/>
           </form>
        <ul>
        {movies}
        </ul>
        
 </Fragment>

};
export default Movies;