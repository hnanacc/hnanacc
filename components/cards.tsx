import React from "react";
import { Link } from "@/components/base";

type FrontCardProps = {
  children: React.ReactNode;
};

export function FrontCard({ children }: FrontCardProps) {
  return <div className="min-h-20">{children}</div>;
}

type FrontCardHeadProps = {
  children: React.ReactNode;
  href: string;
};

export function FrontCardHead({ href, children }: FrontCardHeadProps) {
  return (
    <Link href={href}>
      <h2 className="mb-2">{children}</h2>
    </Link>
  );
}

type FrontCardTextProps = {
  children: React.ReactNode;
};

export function FrontCardText({ children }: FrontCardTextProps) {
  return <p className="mb-4">{children}</p>;
}
