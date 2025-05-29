export type ContentDirection = 'left' | 'right';
export type ProjectStack = 'fullstack' | 'frontend' | 'backend';
export interface ProjectLinks {
  production?: string;
  github?: {
    fullStack?: {
      frontUrl: string;
      backUrl: string;
    };
    frontendUrl?: string;
    backendUrl?: string;
  };
}
export interface ProjectProps {
  contentDirection?: ContentDirection;
  title: string;
  content: string;
  stack: ProjectStack;
  links: ProjectLinks;
  previewImgUrl: string;
  isOnGithub?: boolean;
}
