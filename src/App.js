import Home from './components/Home'

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <h1>Go Movies</h1>

                <div className="col text-end">
                    <a href="#!">
                        <span className="badge badge-success">Login</span>
                    </a>
                </div>

                <hr className="mb-3"/>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <nav>
                        <div className="list-group">
                            <a href="#!" className="list-group-item list-group-item-action">Home</a>
                            <a href="#!" className="list-group-item list-group-item-action">Movies</a>
                            <a href="#!" className="list-group-item list-group-item-action">Genres</a>

                            {/*Admin access below*/}
                            <a href="#!" className="list-group-item list-group-item-action">Add Movie</a>
                            <a href="#!" className="list-group-item list-group-item-action">Manage Catalogue</a>
                            <a href="#!" className="list-group-item list-group-item-action">GraphQL</a>
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Home />
                </div>
            </div>



        </div>
    </div>
  );
}

export default App;
