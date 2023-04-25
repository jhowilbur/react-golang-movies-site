import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="mt-3">Ooops!</h1>
                    <p>Sorry, unexpected error!</p>
                    <p>
                        <strong>{error.status}</strong> - <em>{error.statusText}</em>
                    </p>
                </div>
            </div>
        </div>
    )
}