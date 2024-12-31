import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

type LinkProps = NextLinkProps & {
  children?: React.ReactNode | undefined;
} & React.ComponentPropsWithRef<"a">;

export function Link(props: LinkProps) {
  if (props.href.startsWith("http")) {
    props = {
      target: "_blank",
      rel: "noopener noreferrer",
      ...props,
    };
  }
  return <NextLink {...props} prefetch={true} className="underline"></NextLink>;
}
