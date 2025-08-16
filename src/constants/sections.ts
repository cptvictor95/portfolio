import { Route, NavItem } from "@/types";

// Pure function to get navigation items - single source of truth
export const getNavItems = (t: (key: string) => string): NavItem[] => [
  { route: Route.HOME, label: t("home"), index: 0 },
  { route: Route.RESUME, label: t("resume"), index: 1 },
];
