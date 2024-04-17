import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ViewProperty from "../pages/ViewProperty/ViewProperty";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/view-property/:id',
        element: <PrivateRoute>
          <ViewProperty></ViewProperty>
        </PrivateRoute>,
        loader: () => fetch('../data.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/contact-us',
        element: <PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>
      }
    ]
  },
]);

export default Router;