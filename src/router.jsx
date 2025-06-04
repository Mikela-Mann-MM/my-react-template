import { createBrowserRouter } from "react-router";
import Layout from "./Layout";  
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { handleSubmit } from "./utilities/actions"; 
import Loading from "./components/Loading";
import ErrorBoundary from "./Components/Error";
import RequireAuth from "./Components/RequireAuth";
import { getUser, getUsers } from "./utilities/typicode";
import Login from "./pages/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "list",
                element: (
                    <RequireAuth>
                        <List />
                    </RequireAuth>
                ),
                loader: getUsers,
            },            
            {
                path: "list/:id",
                element: (
                    <RequireAuth>
                      <Detail />,
                    </RequireAuth>
                ),
                loader: getUser

            },
            {
                path: "contact",
                element: <Contact />,
                action: handleSubmit,
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <NotFound /> 
            }
        ]
    }

]);

export default router;