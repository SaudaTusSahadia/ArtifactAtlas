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
import MyArtifacts from "../MyArtifacts/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts/LikedArtifacts";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ArtifactDetails from "../Pages/ArtifactDetails/ArtifactDetails";

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
        loader: () => fetch("http://localhost:3000/artifacts"),
        Component: AllArtifacts
      },
      {
        path: "/addArtifacts",
        element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
      },
      {
        path: "/myArtifacts",
        element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute>
      },
      {
        path: "/likedArtifacts",
        element: <PrivateRoute><LikedArtifacts></LikedArtifacts></PrivateRoute>
      },
      {
        path: "/artifactDetails/:id",
        loader: ({params})=> fetch(`http://localhost:3000/artifacts/${params.id}`),
        element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute>
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
      },
      {
        path: "/auth/forgetPassword",
        Component: ForgetPassword
      }
    ]
  }
]);

export default router;