import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <h1>Go Movies</h1>

                <div className="col text-end">
                    <Link to="/login">
                        <span className="badge badge-success">Login</span>
                    </Link>
                </div>

                <hr className="mb-3"/>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <nav>
                        <div className="list-group">
                            <Link to="/" className="list-group-item list-group-item-action">Home</Link>
                            <Link to="/movies" className="list-group-item list-group-item-action">Movies</Link>
                            <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>

                            {/*Admin access below*/}
                            <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Add Movie</Link>
                            <Link to="/manage-catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                            <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Outlet />
                </div>
            </div>



        </div>
    </div>
  );
}

export default App;
