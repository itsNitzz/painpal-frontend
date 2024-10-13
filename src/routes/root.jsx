/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import { Skeleton } from "antd";
import { createBrowserRouter } from "react-router-dom";

const AuthPage = React.lazy(() => import("@/pages/authPage"));
const Gender = React.lazy(() => import("@/pages/Gender"));
const LoginView = React.lazy(() => import("@/pages/login"));
const Profile = React.lazy(() => import("@/pages/Profile"));
const ResetPassword = React.lazy(() => import("@/pages/ResetPassword"));
const ResetPasswordConfirmation = React.lazy(() => import("@/pages/ResetPasswordConfirmation"));
const ResetPasswordConfirmationPhone = React.lazy(
  () => import("@/pages/ResetPasswordConfirmationPhone")
);
const ResetPasswordPhone = React.lazy(() => import("@/pages/ResetPasswordPhone"));
const SocialConcern = React.lazy(() => import("@/pages/SocialConcern"));
const Start = React.lazy(() => import("@/pages/Start"));
const TestResult = React.lazy(() => import("@/pages/TestResult"));
const WeightAge = React.lazy(() => import("@/pages/WeightAge"));
const YesNoQuestion = React.lazy(() => import("@/pages/YesNoQuestion"));
const YourDiagnosis = React.lazy(() => import("@/pages/YourDiagnosis"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Skeleton />}>
        <Start />
      </Suspense>
    )
  },
  {
    path: "/gender",
    element: (
      <Suspense fallback={<Skeleton />}>
        <Gender />
      </Suspense>
    )
  },
  {
    path: "/weight-age",
    element: (
      <Suspense fallback={<Skeleton />}>
        <WeightAge />
      </Suspense>
    )
  },
  {
    path: "/social-concern",
    element: (
      <Suspense fallback={<Skeleton />}>
        <SocialConcern />
      </Suspense>
    )
  },
  {
    path: "/your-diagnosis",
    element: (
      <Suspense fallback={<Skeleton />}>
        <YourDiagnosis />
      </Suspense>
    )
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<Skeleton />}>
        <Profile />
      </Suspense>
    )
  },
  {
    path: "/test-result",
    element: (
      <Suspense fallback={<Skeleton />}>
        <TestResult />
      </Suspense>
    )
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<Skeleton />}>
        <ResetPassword />
      </Suspense>
    )
  },
  {
    path: "/reset-password-reset-password",
    element: (
      <Suspense fallback={<Skeleton />}>
        <ResetPasswordConfirmation />
      </Suspense>
    )
  },
  {
    path: "/reset-password-confirmation-phone",
    element: (
      <Suspense fallback={<Skeleton />}>
        <ResetPasswordConfirmationPhone />
      </Suspense>
    )
  },
  {
    path: "/reset-password-phone",
    element: (
      <Suspense fallback={<Skeleton />}>
        <ResetPasswordPhone />
      </Suspense>
    )
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Skeleton />}>
        <LoginView />
      </Suspense>
    )
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<Skeleton />}>
        <AuthPage />
      </Suspense>
    )
  }
]);

export default routes;
