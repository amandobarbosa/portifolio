# Portfolio - Amando Barbosa

![Portfolio Preview](public/Cover.png)

High-performance portfolio website built with modern React patterns, focusing on specialized architectural decisions for scalability, accessibility, and user experience.

## Tech Stack

- **Framework**: Next.js 16 (App Router) - Leveraging React Server Components for optimal initial load and SEO.
- **Language**: TypeScript 5 - Strict type safety for maintainable and refactor-resilient code.
- **Styling**: Tailwind CSS 4 - Utility-first method for consistent design tokens and low-runtime overhead.
- **Animations**: Framer Motion 12 - Declarative, hardware-accelerated animations with `useInView` optimization.
- **State Management**: React Context (Language) + Local State - Simplified state architecture suitable for this scope.
- **Forms**: Web3Forms + Sonner - Serverless form handling with optimistic UI feedback.

## Architectural Decisions

### Component Design
Feature-based directory structure (`src/components/*`) ensures code co-location. Each component isolates its own:
- Logic / Hooks
- Styles (via Tailwind utility classes)
- Animation variants

### Internationalization (i18n)
Custom lightweight i18n implementation reducing bundle size compared to heavy libraries like `next-i18next` for this specific use case.
- **Strategy**: Content dictionary pattern with type-safe keys.
- **Implementation**: `useTranslation` hook providing strictly typed access to `locales/pt.ts` and `locales/en.ts`.

### Performance Optimizations
- **Core Web Vitals**: Images optimized with `next/image` (WebP conversion, lazy loading).
- **Bundle Analysis**: Tree-shaking enabled; Framer Motion imports optimized for reduced main thread blocking.
- **CSS Architecture**: Zero-runtime CSS via Tailwind, replacing the previous CSS Modules approach for better unmatched code removal.

## Project Structure

```
src/
├── app/                 # Next.js App Router (Server Components by default)
├── components/          # Reusable UI components
├── config/              # Constant configuration (social links, metadata)
├── contexts/            # React Context providers (Language)
├── hooks/               # Custom hooks (useTranslation)
├── lib/                 # Utilities and animation variants
└── locales/             # Text content dictionaries (PT/EN)
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```
   Access at `http://localhost:3000`.

3. **Production build**
   ```bash
   npm run build
   npm start
   ```

## License

MIT
