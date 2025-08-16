// Pure type definitions - single source of truth for all types

// Route enum for type safety and maintainability
export enum Route {
  HOME = "/",
  RESUME = "/resume",
  CONTACT = "/contact",
}

// Navigation item configuration type - pure interface
export interface NavItem {
  route: Route;
  label: string;
  index: number;
}

// Navigation component props - simplified with no parameters needed
export interface NavigationProps {
  className?: string;
}

// Page transition types
export interface PageTransition {
  direction: "left" | "right";
  duration: number;
}

// Generic component props for consistency
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button hover effect types for neobrutalism aesthetics
export interface ButtonHoverProps {
  variant: "primary" | "secondary" | "outline";
  hoverEffect: "fill" | "slide" | "scale";
}
