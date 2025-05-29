import { Route, NavItem } from "@/types";

// Pure function to get navigation items - single source of truth
export const getNavItems = (t: (key: string) => string): NavItem[] => [
  { route: Route.HOME, label: t("home"), index: 0 },
  { route: Route.RESUME, label: t("resume"), index: 1 },
  { route: Route.CONTACT, label: t("contact"), index: 2 },
];

// Pure constant for route order - immutable configuration
export const ROUTE_ORDER = [Route.HOME, Route.RESUME, Route.CONTACT] as const;

// Animation constants for page transitions - simplified
export const TRANSITION_CONFIG = {
  duration: 400,
  ease: "ease-out",
  direction: "bottom-to-top",
} as const;
