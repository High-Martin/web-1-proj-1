import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import "./index.css";

import { NoticiaDetailPage } from "./pages/hacker-news/[slug]/page.tsx";
import { HackerNewsPage } from "./pages/hacker-news/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HackerNewsPage />,
  },
  {
    path: "/noticia/:slug",
    element: <NoticiaDetailPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
