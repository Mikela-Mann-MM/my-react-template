import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detail() {
    
    const { id } = useParams();
    console.log("ID:", id);

    const [user, setUsr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(result => setUsr(result))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading ? (<p>Loading...</p>) : (
        <>
            <p>user details</p>
            <h2>{user.name}</h2>
            </>
    );
}