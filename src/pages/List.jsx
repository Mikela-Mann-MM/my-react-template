import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Dogs() {
    const [usrs, setUsrs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => setUsrs(result))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <ul>
            {usrs.map(user => (
                <li key={user.id}>
                    <Link to={`/list/${user.id}`}>{user.name}</Link>
            </li>
            ))}
        </ul>
    );
}
