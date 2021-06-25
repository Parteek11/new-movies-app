import Modal from '../UI/Modal';
import classes from './MovieDetail.module.css';

const MovieDetail=(props)=>{
    return <Modal onClose={props.onClose}>
    <p><img src={props.imgPath} alt={props.title} className={classes.imgDetail}/>
    <h2>{props.title}</h2>
    <h4>{'Rating: '+props.movie.vote_average}</h4>
    <h4>{'Release Date: '+props.movie.release_date}</h4>
    {props.detail}</p>
    </Modal>
};

export default MovieDetail;