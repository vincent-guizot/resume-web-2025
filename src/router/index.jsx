import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";

// Pages
import { Home, Resume, Works, Galleries, Contact } from "../pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "resume", element: <Resume /> },
      { path: "works", element: <Works /> },
      { path: "galleries", element: <Galleries /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
