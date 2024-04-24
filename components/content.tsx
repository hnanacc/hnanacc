import { ReactNode } from "react";
import Link from "next/link";

export function WCProse({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}

export function WCLink({
  children,
  url,
}: Readonly<{ children: ReactNode; url: string }>) {
  return (
    <Link href={url} target="_blank" className="underline">
      {children}
    </Link>
  );
}
