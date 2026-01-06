import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Mocking useTranslation precisely if needed, but since we want to test INTEGRATION, 
// we use the actual LanguageProvider and components.

const MultiComponentWrapper = () => (
  <LanguageProvider>
    <Header />
    <Hero />
  </LanguageProvider>
);

describe('Language Switching Integration', () => {
  it('updates localized content across multiple components when language is toggled', async () => {
    render(<MultiComponentWrapper />);

    // Initial query
    const getToggleButton = () => screen.getByRole('button', { name: /Switch to English|Mudar para Português/i });
    
    // Check initial state (Portuguese)
    expect(await screen.findByText('Desenvolvedor', { selector: 'p' })).toBeInTheDocument();

    fireEvent.click(getToggleButton());

    // Wait for the change in the main content (Hero updates)
    expect(await screen.findByText('Developer', { selector: 'p' })).toBeInTheDocument();
    
    // Re-verify the button itself reflects the new state
    // We re-query the button as it might have been replaced during re-render
    await waitFor(() => {
      expect(getToggleButton()).toHaveTextContent('EN');
    });

    // Ensure old Portuguese text is gone
    expect(screen.queryByText('Desenvolvedor', { selector: 'p' })).not.toBeInTheDocument();
  }, 10000);
});
