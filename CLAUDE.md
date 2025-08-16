# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `bun dev` (uses Next.js 15 with Turbopack)
- **Build**: `bun run build`
- **Production server**: `bun start`
- **Linting**: `bun run lint`

## Project Architecture

This is a **Next.js 15.3.2** portfolio website with **App Router** architecture featuring a **retro computing aesthetic** inspired by typewriter, journal, and vintage computing interfaces.

### Core Technologies
- **Next.js 15.3.2** with App Router and React 19
- **TypeScript 5** for type safety
- **Tailwind CSS v4** for styling
- **next-intl** for internationalization (English/Portuguese)

### MVP v2 Scope
The current implementation focuses on a minimal viable product with:
- **Home page**: Basic personal introduction and navigation
- **Resume page**: Professional resume with download functionality
- **Two-route navigation**: Simple menu between Home and Resume
- **Bilingual support**: Complete English/Portuguese localization

### Key Architecture Patterns

#### Retro Computing Design System
- **Typewriter aesthetic**: Monospace fonts, fixed-width layouts
- **Vintage computing**: Inspired by old macOS/Windows 95 interfaces
- **Journal-like typography**: Classic, readable typefaces
- **Old internet feel**: Minimalist, text-focused design
- **Reference inspiration**: joaogeneroso.com aesthetic approach

#### Resume Download System
- **Multi-format support**: PDF and DOCX downloads
- **Bilingual versions**: English and Portuguese resume variants
- **Source document**: Victor_Pudo_Resume_EN.docx as base template
- **Dynamic generation**: Convert DOCX to PDF, translate to Portuguese
- **Download interface**: Clean, accessible download buttons

#### Internationalization System
- **next-intl integration** using "without i18n routing" pattern
- Client-side locale switching without page reloads
- Messages stored in `/messages/en.json` and `/messages/pt.json`
- Locale configuration in `src/i18n/request.ts`
- Custom `LocaleProvider` wrapping `NextIntlClientProvider`
- Persistent locale storage in localStorage

#### Component Architecture
```
src/
├── app/
│   ├── page.tsx         # Home page route
│   ├── resume/
│   │   └── page.tsx     # Resume page route
│   └── layout.tsx       # Root layout with retro styling
├── components/
│   ├── navigation/      # Menu navigation (Home/Resume)
│   ├── resume/         # Resume display and download components
│   ├── layout/         # Page layout compositions
│   └── ui/            # Retro-styled UI components
├── providers/         # React context providers
├── i18n/             # Internationalization config
├── lib/              # Resume processing utilities (PDF/DOCX)
├── data/            # Resume content and translations
├── public/          # Static files (Victor_Pudo_Resume_EN.docx)
└── types/           # TypeScript type definitions
```

#### Clean Architecture Principles
- **Route-based structure**: Simple Home/Resume page routing
- **Retro design components**: Typewriter-styled UI elements
- **Document processing**: DOCX/PDF generation utilities
- **Bilingual content**: Translated resume data structure
- **Type safety**: Strong typing for resume content and downloads

### Retro Styling System
- **Typewriter fonts**: Monospace typography (Courier, Monaco, Consolas)
- **Vintage color palette**: Muted greens, ambers, classic computer colors
- **Pixel-perfect layouts**: Fixed-width, grid-based positioning
- **Minimal animations**: Subtle, terminal-like transitions
- **Classic UI elements**: Buttons and borders inspired by old OS interfaces

### Resume Download System
- **Document storage**: Source DOCX file in `/public/Victor_Pudo_Resume_EN.docx`
- **PDF conversion**: Server-side or client-side DOCX-to-PDF processing
- **Portuguese translation**: Automated or manual translation of resume content
- **Download endpoints**: API routes for serving processed documents
- **File naming**: Consistent naming (e.g., `Victor_Pudo_Resume_EN.pdf`)

## Important Implementation Notes

### Resume Download Implementation
- **Source document**: Place `Victor_Pudo_Resume_EN.docx` in `/public/` directory
- **PDF generation**: Use libraries like `pdf-lib`, `puppeteer`, or `docx-pdf`
- **Portuguese version**: Create `Victor_Pudo_Resume_PT.docx` with translated content
- **Download buttons**: Implement clean, accessible download interface
- **Error handling**: Graceful fallbacks for document processing failures

### Retro Design Implementation
- **Typography**: Use monospace fonts like `ui-monospace`, `Menlo`, `Monaco`
- **Color scheme**: Terminal-inspired colors (green/amber on dark backgrounds)
- **Layout**: Fixed-width containers, ASCII-art borders, pixel-perfect spacing
- **Interactive elements**: Buttons styled like old OS interfaces
- **Loading states**: Terminal-like progress indicators

### Internationalization Usage
- Use `useTranslations()` hook from next-intl for all text
- Add new translation keys to both `/messages/en.json` and `/messages/pt.json`
- Access current locale with custom `useLocale()` hook
- Locale switching is handled by `LocaleProvider` component
- Resume content should be fully translatable

### Component Development
- Follow retro design principles in all components
- Use TypeScript interfaces for resume data structure
- Implement accessible download functionality
- Keep components simple and text-focused

### Layout Structure
The main layout should include:
- Simple navigation menu (Home/Resume)
- Retro-styled typography and spacing
- Consistent vintage computing aesthetic
- Responsive design with classic proportions

## Development Workflow

1. **Start development**: Run `bun dev` 
2. **Code changes**: Components auto-reload with Turbopack
3. **Internationalization**: Test both EN/PT locales using language switcher
4. **Build verification**: Run `bun run build` before commits
5. **Linting**: Run `bun run lint` to ensure code quality

## Project Status

This is a **Version 2 MVP rewrite** focusing on a minimal, retro-styled portfolio. Current implementation status:

### ✅ Foundation Complete
- Modern Next.js 15 setup with App Router
- Complete i18n system with client-side switching
- TypeScript configuration
- Tailwind CSS v4 setup

### 🔄 MVP v2 Implementation Plan
- **Route structure**: Home and Resume pages with proper navigation
- **Retro design system**: Typewriter/vintage computing aesthetic
- **Resume downloads**: Multi-format (PDF/DOCX), bilingual (EN/PT)
- **Source documents**: Integration of `Victor_Pudo_Resume_EN.docx`
- **Portuguese translation**: Create Portuguese version of resume

### 📋 Technical Requirements
- **Document processing**: DOCX-to-PDF conversion system
- **File management**: Serve static documents and generated files
- **Download interface**: Clean, accessible download buttons
- **Responsive design**: Mobile-friendly retro aesthetic
- **Performance**: Fast document generation and download

### 🎨 Design Goals
- **Typewriter aesthetic**: Monospace fonts, fixed layouts
- **Vintage computing**: Old macOS/Windows 95 inspired interface
- **Minimal navigation**: Simple Home/Resume menu
- **Text-focused**: Clean, readable content presentation

The old version is archived in `/old-version/` for reference, containing previous resume data that may be useful for content migration.

## Resume Download System Architecture

### File Structure
```
public/
├── resumes/
│   ├── Victor_Pudo_Resume_EN.docx    # Source English DOCX
│   ├── Victor_Pudo_Resume_PT.docx    # Translated Portuguese DOCX
│   ├── Victor_Pudo_Resume_EN.pdf     # Generated English PDF
│   └── Victor_Pudo_Resume_PT.pdf     # Generated Portuguese PDF

src/
├── app/
│   └── api/
│       └── resume/
│           ├── download/[format]/[lang]/route.ts    # Download endpoints
│           └── generate/route.ts                    # PDF generation API
└── lib/
    ├── resumeProcessor.ts              # DOCX/PDF processing utilities
    ├── documentConverter.ts            # File format conversion
    └── resumeTranslator.ts             # Portuguese translation helper
```

### Download System Components

#### 1. Document Storage
- **Source**: `Victor_Pudo_Resume_EN.docx` (provided by user)
- **Generated**: Portuguese DOCX version (manual translation)
- **Converted**: PDF versions generated from DOCX files
- **Naming convention**: `Victor_Pudo_Resume_{LANG}.{ext}`

#### 2. File Processing Pipeline
```typescript
interface ResumeDownload {
  format: 'pdf' | 'docx';
  language: 'en' | 'pt';
  generateUrl: () => string;
  downloadFile: () => Promise<Blob>;
}
```

#### 3. API Endpoints
- **GET** `/api/resume/download/pdf/en` - Download English PDF
- **GET** `/api/resume/download/pdf/pt` - Download Portuguese PDF  
- **GET** `/api/resume/download/docx/en` - Download English DOCX
- **GET** `/api/resume/download/docx/pt` - Download Portuguese DOCX
- **POST** `/api/resume/generate` - Generate PDF from DOCX (if needed)

#### 4. Frontend Download Interface
```typescript
interface DownloadButtonProps {
  format: 'pdf' | 'docx';
  language: 'en' | 'pt';
  retro?: boolean; // Apply retro styling
}
```

### Technology Recommendations
- **PDF Generation**: `pdf-lib` or `puppeteer` for DOCX-to-PDF conversion
- **File Serving**: Next.js static file serving or API routes
- **Error Handling**: Graceful fallbacks for missing files
- **Caching**: Static generation for better performance

## Retro Design System Specifications

### Typography Scale
```css
/* Typewriter Font Stack */
font-family: 'Courier New', Courier, 'Lucida Console', Monaco, monospace;

/* Size Scale (fixed-width focused) */
--text-xs: 10px;    /* Terminal text */
--text-sm: 12px;    /* Secondary text */
--text-base: 14px;  /* Body text */
--text-lg: 16px;    /* Headings */
--text-xl: 20px;    /* Page titles */
--text-2xl: 24px;   /* Main heading */
```

### Color Palette
```css
/* Classic Terminal Colors */
--bg-primary: #000000;        /* Pure black background */
--bg-secondary: #1a1a1a;      /* Darker gray */
--text-primary: #00ff00;      /* Classic green */
--text-secondary: #ffffff;    /* White text */
--text-muted: #888888;        /* Gray text */
--accent: #ffff00;            /* Yellow highlights */
--error: #ff0000;             /* Red alerts */
--border: #333333;            /* Border color */

/* Alternative Amber Theme */
--bg-amber: #1a0a00;          /* Dark brown */
--text-amber: #ffb000;        /* Amber text */
--accent-amber: #ff6600;      /* Orange accent */
```

### Layout Specifications
```css
/* Fixed-width Layout */
--container-width: 800px;     /* Max content width */
--column-width: 80ch;         /* Text column width */
--gutter: 2rem;               /* Consistent spacing */
--border-width: 2px;          /* Bold borders */

/* Classic Spacing Scale */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
```

### Component Patterns
```css
/* Classic Button Style */
.retro-button {
  border: 2px solid var(--text-primary);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: monospace;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.retro-button:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
}

/* Terminal-style Container */
.terminal-window {
  border: 2px solid var(--border);
  background: var(--bg-primary);
  font-family: monospace;
  padding: var(--space-4);
  margin: var(--space-4) 0;
}

/* ASCII Art Borders */
.ascii-border::before {
  content: "┌─────────────────────────────────────┐";
  display: block;
  font-family: monospace;
  color: var(--text-muted);
}
```

### Responsive Breakpoints
```css
/* Mobile-first, retro-friendly */
--mobile: 320px;     /* Old mobile screens */
--tablet: 768px;     /* Classic tablet */
--desktop: 1024px;   /* Standard desktop */
--wide: 1200px;      /* Wide screens */
```