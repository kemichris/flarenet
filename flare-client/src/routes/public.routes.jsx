import { PublicLayout } from '../pages/layout/PublicLayout';

import { Home } from '../pages/public/Home';
import { Yield } from '../pages/public/Yield';


export const publicRoutes = [
    
    {
        path: '/yield',
        element: <Yield />
    },
    {
        element: <PublicLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            
            // {
            //     path: '/terms',
            //     element: <Terms />,
            // },
        ],
    },
];
