import { PublicLayout } from "../pages/layout/PublicLayout";

import { Home } from "../pages/public/Home";
import { Yield } from "../pages/public/Yield";

export const publicRoutes = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/yield",
        element: <Yield />,
      },
    ],
  },
];
