import { FallbackComponent } from 'app/components/fallback-component/fallback-component';
import AuthLayout from 'app/components/layouts/auth-layout';
import PrivateLayout from 'app/components/layouts/private-layout/private-layout';
import { AuthContextProvider } from 'app/contexts/AuthContext';
import { ReactNode, Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Register = lazy(() => import('app/pages/register/register'));
const Home = lazy(() => import('app/pages/home/home'));

const AuthRoutes = ({ children }: { children: ReactNode }) => {
    return (
        <AuthLayout>
            <Suspense fallback={<FallbackComponent />}>{children}</Suspense>
        </AuthLayout>
    );
};

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
    return (
        <PrivateLayout>
            <Suspense fallback={<FallbackComponent />}>{children}</Suspense>
        </PrivateLayout>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthRoutes>
                <Register />
            </AuthRoutes>
        ),
    },
    {
        path: '/register',
        element: (
            <AuthRoutes>
                <Register />
            </AuthRoutes>
        ),
    },
    {
        path: '/home',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
    {
        path: '/submit-voilation',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
    {
        path: '/whitelist',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
    {
        path: '/billing',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
    {
        path: '/affiliate-program',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
    {
        path: '/settings',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
    {
        path: '/faq',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
    {
        path: '/support',
        element: (
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
        ),
    },
]);

export default function Routes(): ReactNode {
    return (
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    );
}
