import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { turnOpsFixtureRecords } from './__fixtures__/turnops-console.fixture';
import {
  InsightsTurnopsConsole,
  RecordEditorTurnopsConsole,
  RecordOperationsTurnopsConsole,
  StatusBoardTurnopsConsole,
} from './screens';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('exposes stable names for icon-only controls', () => {
    const { unmount: unmountOperations } = render(<RecordOperationsTurnopsConsole />);
    expect(screen.getByRole('button', { name: 'Open operations' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open notifications' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open settings' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Filter turns' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open more turn actions' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open BAW123 turn details' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open AA051 turn details' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open VS201 turn details' })).toBeInTheDocument();
    unmountOperations();

    const { unmount: unmountBoard } = render(<StatusBoardTurnopsConsole records={turnOpsFixtureRecords} />);
    expect(screen.getByRole('button', { name: 'Open notifications' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open settings' })).toBeInTheDocument();
    unmountBoard();

    const { unmount: unmountInsights } = render(<InsightsTurnopsConsole records={turnOpsFixtureRecords} />);
    expect(screen.getByRole('button', { name: 'Open notifications' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open settings' })).toBeInTheDocument();
    unmountInsights();

    render(<RecordEditorTurnopsConsole />);
    expect(screen.getByRole('button', { name: 'Open operations' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open notifications' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open settings' })).toBeInTheDocument();
  });
});
