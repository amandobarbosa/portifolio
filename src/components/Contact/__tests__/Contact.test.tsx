import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contact from '@/components/Contact/Contact';
import { LanguageProvider } from '@/contexts/LanguageContext';

describe('Contact Component', () => {
  it('renders all required form fields with correct accessibility labels', async () => {
    render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );

    expect(await screen.findByLabelText(/Nome|Name/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Email/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Assunto|Subject/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Mensagem|Message/i)).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /Enviar|Submit/i })).toBeInTheDocument();
  });

  it('enforces native HTML5 validation for mandatory fields', async () => {
    render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );
    const submitButton = await screen.findByRole('button', { name: /Enviar|Submit/i });
    
    fireEvent.click(submitButton);

    expect(screen.getByLabelText(/Nome|Name/i)).toBeRequired();
    expect(screen.getByLabelText(/Email/i)).toBeRequired();
    expect(screen.getByLabelText(/Mensagem|Message/i)).toBeRequired();
  });
});
