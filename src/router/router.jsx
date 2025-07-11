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
import UpdateArtifact from "../MyArtifacts/UpdateArtifact/UpdateArtifact";
import AboutUs from "../components/AboutUs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsOfServices from "../components/TermsOfServices";
import FAQ from "../components/FAQ";
import MyProfile from "../components/MyProfile";
import ContactUs from "../components/ContactUs";
import ErrorPage from "../components/ErrorPage";
import Exibitions from "../components/Exibitions";
import Discover from "../components/Discover";


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
        path: "/exibitions",
        Component: Exibitions
      },
      {
        path: "/discover",
        Component: Discover
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
        element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute>
      },
      {
        path: "/updateArtifact/:id",
        element: <PrivateRoute><UpdateArtifact></UpdateArtifact></PrivateRoute>
      },
      {
        path: "/about",
        Component: AboutUs
      },
      {
        path: "/privacy",
        Component: PrivacyPolicy
      },
      {
        path: "/terms",
        Component: TermsOfServices
      },
      {
        path: "/faq",
        Component: FAQ
      },
      {
        path: "/profile",
        Component: MyProfile
      },
      {
        path: "/contact",
        Component: ContactUs
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
  },
  {
    path: "/*",
    Component: ErrorPage
  }
]);

export default router;