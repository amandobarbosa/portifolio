import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '@/components/Hero/Hero';
import { LanguageProvider } from '@/contexts/LanguageContext';

describe('Hero Component', () => {
  it('renders the developer name and professional role', async () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );

    expect(await screen.findByText("Amando Barbosa")).toBeInTheDocument();
    // We search for the specific paragraph with the role class to avoid matching the description text
    const roleElement = await screen.findByText("Desenvolvedor", { selector: 'p' });
    expect(roleElement).toBeInTheDocument();
  });

  it('displays navigation links for experience and projects', async () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );

    // Using the actual text from the translations (CURRÍCULO / PROJETOS)
    expect(await screen.findByRole('link', { name: /CURRÍCULO/i })).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: /PROJETOS/i })).toBeInTheDocument();
  });

});
