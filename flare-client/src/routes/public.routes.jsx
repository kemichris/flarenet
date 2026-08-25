import { PublicLayout } from "../pages/layout/PublicLayout";
import { WalletConnect } from "../components/wallets/WalletConnect";

import { Home } from "../pages/public/Home";
import { Yield } from "../pages/public/Yield";

export const publicRoutes = [
  {
    path: "/wallets",
    element: <WalletConnect />,
  },
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
