# Portfolio Website V2 - Development Plan

## 🎯 Project Overview

Transform the portfolio into a **modern, single-page application** focused on the resume/curriculum with a **no-scroll, full-screen design** and **custom color themes**.

### ✅ Current State (COMPLETED)

- [x] **Fresh Next.js 15.3.2 setup** with App Router
- [x] **React 19** and TypeScript 5
- [x] **Tailwind CSS v4** pre-configured
- [x] **Old version archived** in `old-version/` folder for reference
- [x] **Clean project structure** ready for implementation

### 🎨 New Design Requirements (Updated from Notepad)

- **Single page, no scroll, no navigation pages**
- **Custom UI themes** (using Factree platform color palettes)
- **Dark mode as default** with neutral colors initially
- **Simple sections**: Resume + About + Contact + Links
- **Page transitions** between themes/states
- **No complex typography** - use Next.js base font

### Current Issues from Old Version (Reference Only)

- Large PDF file sizes (using html2canvas + jsPDF)
- DOCX functionality missing/broken
- Resume data available in `old-version/locale/` folder

## 🚀 Phase 1: Foundation & Clean Setup (Priority: High) ✅ IN PROGRESS

### 1.1 ✅ Technology Stack Modernization (COMPLETED)

- [x] **Next.js 15.3.2**: Latest with App Router
- [x] **Tailwind CSS v4**: Pre-configured and ready
- [x] **React 19 & TypeScript 5**: Modern stack
- [x] **Clean project structure**: Fresh start

### 1.2 Clean Starter Files & Basic Structure (✅ COMPLETED)

- [x] **Remove default Next.js content**: Clean page.tsx and globals.css
- [x] **Setup basic single-page layout**: No scroll, full-screen sections
- [x] **Copy resume data**: Transfer from old-version/locale
- [x] **Create component structure**: Simple, functional components
- [x] **Basic dark theme**: Neutral colors with Tailwind

### ✅ What We Just Implemented:

- **Clean single-page layout** with 4 sections (Hero, Resume, About, Contact)
- **No-scroll design** with full viewport height sections
- **Functional components** following SOLID principles
- **Type-safe navigation** using TypeScript enums
- **Dark theme** with neutral color gradients
- **Smooth transitions** between sections
- **Professional metadata** in layout.tsx
- **Resume data structure** copied from old version
- **🌐 Complete i18n system** with next-intl integration
- **🔄 Client-side locale switching** without routing
- **🎯 Type-safe translations** with custom hooks
- **💾 Locale persistence** in localStorage
- **🎨 Language switcher UI** with smooth transitions

### ✅ i18n Implementation Details:

- **✅ next-intl integration**: UPDATED - Now using official "without i18n routing" pattern
- **✅ Proper file structure**: messages/ folder in root, src/i18n/request.ts configuration
- **✅ NextIntlClientProvider**: Official provider integration with our custom locale management
- **✅ useTranslations hook**: Using official next-intl hooks instead of custom implementation
- **Dynamic locale switching**: Instant language changes with smooth UX
- **Type safety**: Full TypeScript support for locales and translations
- **Fallback system**: Graceful handling of missing translations
- **Browser detection**: Automatic locale detection from browser preferences
- **Persistence**: User language preference saved in localStorage
- **Accessible UI**: Language switcher with proper ARIA labels
- **Clean architecture**: Separation of concerns with custom hooks and providers

### 🔄 Latest Updates:

- **Fixed next-intl implementation** to follow official documentation
- **Cleaned up old files** - removed custom useMessages hook and old i18n config
- **✅ ARCHITECTURE OVERHAUL**: Implemented clean component architecture
- **✅ SEPARATION OF CONCERNS**: Each component has single responsibility
- **✅ FUNCTIONAL PROGRAMMING**: All components follow DRY, KISS, SOLID principles
- **Updated file structure** to match official pattern:
  ```
  ├── messages/
  │   ├── en.json
  │   └── pt.json
  ├── next.config.ts (with createNextIntlPlugin)
  └── src/
      ├── types/           # Type definitions (single source of truth)
      ├── constants/       # Configuration constants
      ├── utils/           # Pure utility functions
      ├── components/
      │   ├── sections/    # Individual page sections
      │   ├── navigation/  # Navigation components
      │   ├── layout/      # Layout compositions
      │   └── index.ts     # Barrel exports
      ├── i18n/
      │   └── request.ts
      └── app/
          ├── layout.tsx
          └── page.tsx     # Now only 3 lines!
  ```

### ✅ Architecture Implementation Details:

- **🏗️ Clean Architecture**: Proper separation of concerns with logical directories
- **🔄 Barrel Exports**: Centralized imports using index.ts files
- **📦 Component Composition**: Each component has single responsibility
- **🎯 Type Safety**: Centralized TypeScript types and interfaces
- **⚛️ Pure Functions**: All components are pure, functional React components
- **🧩 Reusable Logic**: Shared constants and utilities
- **📏 SOLID Principles**: Open/closed, single responsibility throughout
- **💡 DRY Implementation**: No code repetition, shared configurations

## 🎨 Phase 2: Single-Page Layout Design (Priority: High)

### 2.1 Full-Screen Section Layout (Updated Requirements)

- [ ] **Hero Section**: Professional intro + photo (full screen)
- [ ] **Resume Section**: Complete resume display (full screen)
- [ ] **About Section**: Short personal description (full screen)
- [ ] **Contact Section**: Freelance contact + GitHub + LinkedIn (full screen)
- [ ] **Navigation**: Smooth transitions between sections (no scroll)

### 2.2 Theme System Implementation

- [ ] **Dark mode base**: Neutral colors as starting point
- [ ] **Theme architecture**: Prepare for Factree color palettes
- [ ] **Smooth transitions**: Page transitions between themes
- [ ] **Responsive design**: Perfect on all devices
- [ ] **Typography**: Clean, simple, Next.js default font

## 📄 Phase 3: Resume Download System Overhaul (Priority: High)

### 3.1 PDF Generation Improvement

**Current Issues**: Large file sizes, poor quality
**Solutions**:

- [ ] **Replace html2canvas approach**: Use modern PDF generation libraries
- [ ] **Implement Puppeteer**: For high-quality PDF rendering
- [ ] **Alternative: PDFKit**: For programmatic PDF creation
- [ ] **Optimize file size**: Target <500KB for PDF files
- [ ] **Multiple formats**: A4 and US Letter support

### 3.2 DOCX Generation Implementation

**Current State**: Non-functional
**Solutions**:

- [ ] **Add docx library**: Use `docx` npm package for Word document generation
- [ ] **Template-based approach**: Create reusable DOCX templates
- [ ] **Formatting preservation**: Ensure professional appearance
- [ ] **Cross-platform compatibility**: Test on different Word versions

### 3.3 Download UX Enhancement

- [ ] **Loading states**: Clear feedback during document generation
- [ ] **Download options**: Quick format selection (PDF/DOCX)
- [ ] **File naming**: Consistent, professional naming convention
- [ ] **Error handling**: Graceful failure with retry options

## ⚡ Phase 4: Modern Interactions (Priority: Medium)

### 4.1 Animation Framework

- [ ] **Framer Motion upgrade**: Already have v6, upgrade to latest
- [ ] **Scroll animations**: Smooth section transitions
- [ ] **Micro-interactions**: Button hovers, loading states
- [ ] **Page transitions**: Smooth navigation experience

### 4.2 Interactive Elements

- [ ] **Skill bars/charts**: Visual representation of expertise levels
- [ ] **Timeline**: Interactive work experience timeline
- [ ] **Hover effects**: Professional, subtle interactions
- [ ] **Loading animations**: Engaging wait states

## 🌟 Phase 5: Advanced Features (Priority: Low - Future)

### 5.1 3D Elements (Three.js Integration)

- [ ] **Hero background**: Subtle 3D elements or particles
- [ ] **Skill visualization**: 3D representation of technology stack
- [ ] **Interactive objects**: Mouse-following elements
- [ ] **Performance optimization**: Ensure mobile compatibility

### 5.2 Enhanced Functionality

- [ ] **Dark/Light mode**: Theme switching capability
- [ ] **Language toggle**: PT-BR/EN-US (already exists, maintain)
- [ ] **Social media integration**: Professional links showcase
- [ ] **Analytics**: Track resume downloads and page engagement

## 🛠️ Updated Implementation Strategy

### 🔄 CURRENT WEEK: Foundation & Layout

1. ✅ **Project setup**: Fresh Next.js 15 (COMPLETED)
2. 🔄 **Clean starter files**: Remove default content (IN PROGRESS)
3. **Transfer resume data**: Copy from old-version
4. **Basic single-page layout**: Full-screen sections
5. **Dark theme setup**: Neutral colors with Tailwind

### Week 2: Content & Sections

1. **Implement all sections**: Hero, Resume, About, Contact
2. **Navigation system**: Smooth section transitions
3. **Resume data integration**: Display professional information
4. **Responsive optimization**: Perfect mobile experience

### Week 3: Resume Download System

1. **Research modern PDF solutions**: Better than html2canvas approach
2. **Implement PDF generation**: Lightweight, professional output
3. **Add DOCX functionality**: Complete Word document export
4. **Download UX**: Clean interface and loading states

### Week 4: Polish & Themes

1. **Custom theme system**: Factree platform color palettes
2. **Theme transitions**: Smooth color scheme switching
3. **Final optimizations**: Performance and accessibility
4. **Testing & deployment**: Cross-browser compatibility

## 📊 Success Metrics

### Technical Metrics

- [ ] **PDF file size**: <500KB (currently much larger)
- [ ] **Page load time**: <2 seconds on 3G
- [ ] **Lighthouse score**: >90 on all metrics
- [ ] **Cross-browser compatibility**: Chrome, Firefox, Safari, Edge

### User Experience Metrics

- [ ] **Resume download success rate**: >95%
- [ ] **Mobile usability**: Perfect mobile experience
- [ ] **Professional appearance**: Modern, clean design
- [ ] **Accessibility**: WCAG 2.1 AA compliance

## 🔧 Technical Recommendations

### PDF Generation Options (Research Required)

1. **Puppeteer**: Server-side PDF generation, high quality
2. **react-pdf**: React-native PDF generation, good control
3. **PDFKit**: Programmatic PDF creation, smaller files
4. **jsPDF with optimization**: Improve current approach

### DOCX Generation

- **Primary choice**: `docx` npm package
- **Alternative**: `officegen` for broader Office support

### Animation Libraries

- **Framer Motion**: Already integrated, upgrade to latest
- **Three.js**: For future 3D features
- **GSAP**: Alternative for complex animations

## 🚀 Updated Quick Start Checklist

- [x] Create fresh Next.js 15 project
- [x] Archive old version for reference
- [ ] Clean default Next.js starter content
- [ ] Copy resume data from old-version
- [ ] Setup basic single-page layout structure
- [ ] Implement dark theme with neutral colors
- [ ] Create section navigation system

---

## 📝 Updated Notes for Implementation

1. **Single-page, no-scroll design**: Each section takes full viewport height
2. **Theme-first approach**: Build with theme switching in mind from start
3. **Functional programming**: Use DRY, KISS, SOLID principles
4. **Progressive enhancement**: Start simple, add features incrementally
5. **Reference old-version**: Resume data and component ideas available
6. **Performance focus**: Fast transitions, optimized bundle size

**Next Immediate Steps**: Clean starter files and setup basic layout structure.
