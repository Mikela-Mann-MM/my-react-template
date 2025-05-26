import { Link } from "react-router"

export default function NotFound(){

    return (
        <>
            <h1>404</h1>
            <p>Du er landet et forkert sted</p>
            <Link to="/">Gå til forsiden</Link>
        </>
    )
}