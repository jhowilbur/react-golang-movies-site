import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let movieList = [
            {
                id: 1,
                title: "The Shawshank Redemption",
                release_date: "1994-09-14",
                poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
                runtime: 142,
                mpaa_rating: "R",
                description: "Long description here"
            },
            {
                id: 2,
                title: "The Godfather",
                release_date: "1972-03-14",
                poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
                runtime: 175,
                mpaa_rating: "R",
                description: "Long description here"
            },
        ];

        setMovies(movieList)

    }, []);

    return(
        <>

            <div className="text-center">
                <h2>Movies</h2>
                <hr />
                <table className="table table-striped table-over">
                    <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                        <th>Poster</th>
                    </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <Link to={`/movies/${movie.id}`}>
                                        {movie.title}
                                    </Link>
                                </td>
                                <td>{movie.release_date}</td>
                                <td>{movie.mpaa_rating}</td>
                                <td>
                                    <img src={movie.poster} alt={movie.title} width="100" height="150"></img>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Movies;