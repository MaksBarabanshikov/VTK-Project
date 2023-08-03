import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { AuthLayout } from '@/app/layouts';
import { AUTH, REGISTER } from '@/app/configuration/routerPaths.ts';
import { SuspenseRouteWrapper } from '@/shared/ui/SuspenseRouteWrapper';

const AuthPage = React.lazy(() => import('@/pages/auth/AuthPage.tsx'));
const RegisterPage = React.lazy(() => import('@/pages/auth/RegisterPage.tsx'));

const appRouter = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: (
          <SuspenseRouteWrapper>
            <AuthPage />
          </SuspenseRouteWrapper>
        ),
        path: AUTH,
      },
      {
        element: (
          <SuspenseRouteWrapper>
            <RegisterPage />
          </SuspenseRouteWrapper>
        ),
        path: REGISTER,
      },
    ],
  },
]);

export default appRouter;
