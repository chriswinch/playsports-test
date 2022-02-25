import { useLocation } from "remix"

export default function () {
    const location = useLocation();

    return (
        <div className="page">
            <h1>Page</h1>
            <p>Page WIP</p>
            <p>{location.pathname}</p>
        </div>
    )
}
