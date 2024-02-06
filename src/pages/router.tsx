
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ErrorPage from './error-page';
import Home from './home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" replace />,
        children: [
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
    {
        path: "/home",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
        ],
    },
]);

export default router;