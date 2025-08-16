// Pure type definitions - single source of truth for all types

// Route enum for type safety and maintainability
export enum Route {
  HOME = "/",
  RESUME = "/resume",
}

// Navigation item configuration type - pure interface
export interface NavItem {
  route: Route;
  label: string;
  index: number;
}
