import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from '../pages/Home/Home';
import Architecture from '../pages/Architecture/Architecture'
import Management from '../pages/Management/Management'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/Contact/Contact'
import NotFound from "../components/NotFound/NotFound";
import Root from '../root/Root'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Navigate to="/inicio" replace />
            },

            {
                path: "/inicio",
                element: <Home />
            },
            {
                path: "/arquitectura",
                element: <Architecture />
            },
            {
                path: "/gestion",
                element: <Management />
            },
            {
                path: "/sobre-nosotros",
                element: <AboutUs />
            },
            {
                path: "/contacto",
                element: <Contact />
            },

            {
                path: "/hasiera",
                element: <Home />
            },
            {
                path: "/arkitektura",
                element: <Architecture />
            },
            {
                path: "/kudeaketa",
                element: <Management />
            },
            {
                path: "/guri-buruz",
                element: <AboutUs />
            },
            {
                path: "/kontaktua",
                element: <Contact />
            },

            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/architecture",
                element: <Architecture />
            },
            {
                path: "/management",
                element: <Management />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            },

            {
                path: "*",
                element: <NotFound />
              }
        ]
    },
]);

export default router;