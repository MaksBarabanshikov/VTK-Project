import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { AuthLayout, BaseLayout } from '@/app/layouts';
import {
  ADMIN_CALENDAR,
  ADMIN_CARD,
  ADMIN_CHAT, ADMIN_DASHBOARD,
  ADMIN_DECK,
  ADMIN_EMAIL,
  ADMIN_LAYOUT, ADMIN_SETTINGS,
  AUTH,
  REGISTER,
} from '@/app/configuration/routerPaths.ts';
import { SuspenseRouteWrapper } from '@/shared/ui/SuspenseRouteWrapper';

const AuthPage = React.lazy(() => import('@/pages/auth/AuthPage.tsx'));
const RegisterPage = React.lazy(() => import('@/pages/auth/RegisterPage.tsx'));
const AdminHomePage = React.lazy(() => import('@/pages/admin/AdminHome.tsx'));
const AdminEmailPage = React.lazy(() => import('@/pages/admin/AdminEmail.tsx'));
const AdminDeckPage = React.lazy(() => import('@/pages/admin/AdminDeck.tsx'));
const AdminCalendarPage = React.lazy(() => import('@/pages/admin/AdminCalendar.tsx'));
const AdminCardPage = React.lazy(() => import('@/pages/admin/AdminCard.tsx'));
const AdminChatPage = React.lazy(() => import('@/pages/admin/AdminChat.tsx'));
const AdminSettingsPage = React.lazy(() => import('@/pages/admin/AdminSettings.tsx'));

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
  {
    element: <BaseLayout />,
    children:[
      {
        element: (
          <SuspenseRouteWrapper is100Vh>
            <AdminHomePage />
          </SuspenseRouteWrapper>
        ),
        path: ADMIN_DASHBOARD,
        index: true,
      },
      {
        element: (
        <SuspenseRouteWrapper is100Vh>
          <AdminEmailPage />
        </SuspenseRouteWrapper>
        ),
        path: ADMIN_EMAIL,
      },
      {
        element: (
        <SuspenseRouteWrapper is100Vh>
          <AdminChatPage />
        </SuspenseRouteWrapper>
        ),
        path: ADMIN_CHAT,
      },
      {
        element: (
        <SuspenseRouteWrapper is100Vh>
          <AdminDeckPage />
        </SuspenseRouteWrapper>
        ),
        path: ADMIN_DECK,
      },
      {
        element: (
        <SuspenseRouteWrapper is100Vh>
          <AdminCardPage />
        </SuspenseRouteWrapper>
        ),
        path: ADMIN_CARD,
      },
      {
        element: (
        <SuspenseRouteWrapper is100Vh>
          <AdminCalendarPage />
        </SuspenseRouteWrapper>
        ),
        path: ADMIN_CALENDAR,
      },
      {
        element: (
        <SuspenseRouteWrapper is100Vh>
          <AdminSettingsPage />
        </SuspenseRouteWrapper>
        ),
        path: ADMIN_SETTINGS,
      }],
    path: ADMIN_LAYOUT,
  },
]);

export default appRouter;
