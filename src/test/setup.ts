import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import React from 'react';

// Cleanup after each test
afterEach(() => {
    cleanup();
});

// Mocking IntersectionObserver since it's used by Framer Motion's useInView
const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value.toString(); },
        clear: () => { store = {}; },
        removeItem: (key: string) => { delete store[key]; },
    };
})();

vi.stubGlobal('localStorage', localStorageMock);

// Mock framer-motion to avoid complex animation logic in tests
vi.mock('framer-motion', async (importOriginal) => {
    const actual = await importOriginal();
    const mockComponent = ({ children, ...props }: any, tag: string) => React.createElement(tag, props, children);

    return {
        ...actual as any,
        motion: new Proxy({}, {
            get: (_target, tag: string) => {
                return (props: any) => mockComponent(props, tag);
            },
        }),

        useInView: () => [null, true], // Returns [ref, isInView]
        AnimatePresence: ({ children }: any) => children,
    };
});
