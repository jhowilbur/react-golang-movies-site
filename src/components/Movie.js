import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({});
    let {id} = useParams();

    useEffect(() => {
        let myMovie = {
            id: 1,
            title: "The Shawshank Redemption",
            release_date: "1994-09-14",
            poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            runtime: 142,
            mpaa_rating: "R",
            description: "Long description here"
        };

        setMovie(myMovie);
    }, [id]);

    return(
        <>
            <div className="text-center">
                <h2>{movie.title}</h2>
                <hr />
                <small><em>{movie.release_date}</em></small>
                <br />
                <small><em>{movie.mpaa_rating}</em></small>
                <br />
                <small><em>{movie.runtime} minutes</em></small>
                <br /><br />
                <img src={movie.poster} alt={movie.title} width="400" height="500"></img>
            </div>
        </>
    )
}

export default Movie;