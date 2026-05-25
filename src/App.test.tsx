import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { turnOpsConsoleStore } from './features/turnops-console/turnops-console.store';

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.replaceState(null, '', '/');
    turnOpsConsoleStore.reset();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it.each([
    ['/board', 'board', 'status-board'],
    ['/insights', 'insights', 'insights'],
  ])('hydrates %s as the active direct route', async (path, route, activeScreen) => {
    window.localStorage.clear();
    window.history.replaceState(null, '', path);
    turnOpsConsoleStore.reset();

    render(<App />);

    await waitFor(() => {
      expect(window.app?.route).toBe(route);
      expect(window.app?.activeScreen).toBe(activeScreen);
    });
  });

  it('renders the record editor without option selected warnings', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    window.history.replaceState(null, '', '/editor');
    turnOpsConsoleStore.reset();

    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(consoleError).not.toHaveBeenCalledWith(expect.stringContaining('Use the `defaultValue` or `value` props on <select>'));
  });
});
