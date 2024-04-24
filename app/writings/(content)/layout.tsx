import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog Name",
};

export default function ContentLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
