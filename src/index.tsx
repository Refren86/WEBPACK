import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "@/components/App";
import { About } from "@/pages/about";
import { Shop } from "@/pages/shop";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root element not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading about page...">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback="Loading shop page...">
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
