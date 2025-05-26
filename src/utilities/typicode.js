import queryClient from "./queryclient";

export async function getUsers() {
    return queryClient.fetchQuery({
        queryKey: ["users"],
        queryFn: async function () {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");     
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }
    });
}

export async function getUser(id) {
    return queryClient.fetchQuery({
        queryKey: ["user", id],
        queryFn: async function () {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);     
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }
    });
}