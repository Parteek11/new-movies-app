import { Fragment,useState } from 'react';
import MovieDetail from './UI/MovieDetail';
import classes from './MovieItem.module.css';

const MovieItem=(props)=>{
    const [view, setView] = useState(false);
    const viewDetail=()=>{
        setView(true);
    };
    const closeView=()=>{
        setView(false);
    };
    const movieDetail =<MovieDetail imgPath={props.imgPath} title={props.title} detail={props.overview} movie={props.movie} onClose={closeView} />

    return <Fragment>
            <div className={classes.card}>
            <img src={props.imgPath} alt={props.title} className={classes.img} />
            <h4>{props.title}</h4>
            <p className={classes.rating}>{props.rating}</p>
            <p><button onClick={viewDetail}>View</button></p>
        </div>
      {view && movieDetail }
      </Fragment>
     
};

export default MovieItem;