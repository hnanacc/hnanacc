"use client";

import { ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (
  typeof window !== "undefined" &&
  typeof process.env.NEXT_PUBLIC_POSTHOG_KEY !== "undefined"
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
  console.log("Initializing analytics.");
}
export function AnalyticsProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export const analyticsInstance = posthog;
