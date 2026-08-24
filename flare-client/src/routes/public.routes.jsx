import { PublicLayout } from '../pages/layout/PublicLayout';

import { Home } from '../pages/public/Home';


export const publicRoutes = [
    
    // {
    //     path: '/forgot-password',
    //     element: <ForgotPassword />
    // },
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
