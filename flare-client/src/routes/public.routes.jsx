import { PublicLayout } from "../pages/layout/PublicLayout";
import { WalletConnect } from "../components/wallets/WalletConnect";

import { Home } from "../pages/public/Home";
import { Yield } from "../pages/public/Yield";
import { Partner } from "../pages/public/Partner";
import { Airdrop } from "../pages/public/Airdrop";

export const publicRoutes = [
  {
    path: "/wallets",
    element: <WalletConnect />,
  },
  {
    path: "/wallets/partner",
    element: <Partner />,
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
      {
        path: "/airdrop",
        element: <Airdrop />,
      },
    ],
  },
];
