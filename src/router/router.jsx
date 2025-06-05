import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";

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
      }
    ]
  },
]);

export default router;