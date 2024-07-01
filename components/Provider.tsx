"use client";

import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Provider = ({ children }: LayoutProps) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;
