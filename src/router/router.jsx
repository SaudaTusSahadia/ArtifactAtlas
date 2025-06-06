import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Context/PrivateRoute";
import AddArtifacts from "../Pages/AddArtifacts/AddArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/allArtifacts",
        Component: AllArtifacts
      },
      {
        path: "/addArtifacts",
        element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signIn",
        Component: SignIn
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  }
]);

export default router;