"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BaseComponentProps } from "@/types";

interface PageTransitionProps extends BaseComponentProps {
  children: React.ReactNode;
}

// Card stacking page transition
export const PageTransition = ({
  children,
  className = "",
}: PageTransitionProps) => {
  const pathname = usePathname();
  const [transitionPhase, setTransitionPhase] = useState<
    "idle" | "card-up" | "content-up" | "card-away"
  >("idle");
  const [displayContent, setDisplayContent] = useState(children);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== previousPath) {
      // Phase 1: Card slides up from bottom
      setTransitionPhase("card-up");

      // Phase 2: New content slides up behind card (200ms after card starts)
      const contentTimer = setTimeout(() => {
        setDisplayContent(children);
        setTransitionPhase("content-up");
      }, 200);

      // Phase 3: Card slides away upward, revealing new content (400ms later)
      const cardAwayTimer = setTimeout(() => {
        setTransitionPhase("card-away");
      }, 400);

      // Phase 4: Reset to idle (200ms after card slides away)
      const resetTimer = setTimeout(() => {
        setTransitionPhase("idle");
        setPreviousPath(pathname);
      }, 600);

      return () => {
        clearTimeout(contentTimer);
        clearTimeout(cardAwayTimer);
        clearTimeout(resetTimer);
      };
    }
  }, [pathname, previousPath, children]);

  // Get card color based on route
  const getCardColor = (path: string) => {
    switch (path) {
      case "/resume":
        return "bg-blue-500";
      case "/contact":
        return "bg-green-500";
      default:
        return "bg-yellow-400";
    }
  };

  // Get card position based on transition phase
  const getCardTransform = () => {
    switch (transitionPhase) {
      case "card-up":
      case "content-up":
        return "translate-y-0"; // Card at top, covering screen
      case "card-away":
        return "-translate-y-full"; // Card slides up and away
      default:
        return "translate-y-full"; // Card hidden at bottom
    }
  };

  // Get content position based on transition phase
  const getContentTransform = () => {
    switch (transitionPhase) {
      case "content-up":
      case "card-away":
      case "idle":
        return "translate-y-0"; // Content at normal position
      default:
        return "translate-y-full"; // Content hidden at bottom
    }
  };

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Current page content (visible during idle and card-up phases) */}
      <div
        className={`relative z-10 ${
          transitionPhase === "idle" || transitionPhase === "card-up"
            ? "block"
            : "hidden"
        }`}
      >
        {transitionPhase === "idle" ? children : displayContent}
      </div>

      {/* Transition card */}
      <div
        className={`
          fixed inset-0 z-40 transform transition-transform duration-300 ease-out
          ${getCardColor(pathname)}
          ${getCardTransform()}
        `}
      />

      {/* New page content sliding up from behind */}
      <div
        className={`
          fixed inset-0 z-30 transform transition-transform duration-300 ease-out
          ${getContentTransform()}
        `}
      >
        {displayContent}
      </div>
    </div>
  );
};
