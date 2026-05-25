import { turnOpsFixtureRecords, type TurnRecord } from '../../__fixtures__/turnops-console.fixture';

export type TurnOpsRoute = 'operations' | 'board' | 'insights' | 'editor';
export type TurnOpsPanel = 'all' | 'delayed' | 'completed' | 'filters' | 'notifications' | 'settings';
export type TurnOpsStorageStatus = 'ready' | 'unavailable' | 'recovered';

export interface PersistedTurnOpsState {
  route?: TurnOpsRoute;
  selectedRecordId?: string;
  activePanel?: TurnOpsPanel;
}

export interface TurnOpsLoadResult {
  records: TurnRecord[];
  persisted: PersistedTurnOpsState;
  storageStatus: TurnOpsStorageStatus;
  lastError: string | null;
}

const STORAGE_KEY = 'turnops-console:v1';
const VALID_ROUTES: TurnOpsRoute[] = ['operations', 'board', 'insights', 'editor'];
const VALID_PANELS: TurnOpsPanel[] = ['all', 'delayed', 'completed', 'filters', 'notifications', 'settings'];

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function sanitizePersisted(value: unknown): PersistedTurnOpsState {
  if (!isObject(value)) {
    return {};
  }

  return {
    route: VALID_ROUTES.includes(value.route as TurnOpsRoute) ? (value.route as TurnOpsRoute) : undefined,
    selectedRecordId: typeof value.selectedRecordId === 'string' ? value.selectedRecordId : undefined,
    activePanel: VALID_PANELS.includes(value.activePanel as TurnOpsPanel)
      ? (value.activePanel as TurnOpsPanel)
      : undefined,
  };
}

function getStorage(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadTurnOpsConsole(): TurnOpsLoadResult {
  const storage = getStorage();

  if (!storage) {
    return {
      records: turnOpsFixtureRecords,
      persisted: {},
      storageStatus: 'unavailable',
      lastError: 'Local preferences are unavailable in this browser session.',
    };
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);

    if (!raw) {
      return {
        records: turnOpsFixtureRecords,
        persisted: {},
        storageStatus: 'ready',
        lastError: null,
      };
    }

    return {
      records: turnOpsFixtureRecords,
      persisted: sanitizePersisted(JSON.parse(raw)),
      storageStatus: 'ready',
      lastError: null,
    };
  } catch {
    storage.removeItem(STORAGE_KEY);

    return {
      records: turnOpsFixtureRecords,
      persisted: {},
      storageStatus: 'recovered',
      lastError: 'Saved TurnOps preferences were reset because they could not be read.',
    };
  }
}

export function saveTurnOpsConsole(state: PersistedTurnOpsState): TurnOpsStorageStatus {
  const storage = getStorage();

  if (!storage) {
    return 'unavailable';
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(sanitizePersisted(state)));
    return 'ready';
  } catch {
    return 'unavailable';
  }
}

export function clearTurnOpsConsole(): TurnOpsStorageStatus {
  const storage = getStorage();

  if (!storage) {
    return 'unavailable';
  }

  try {
    storage.removeItem(STORAGE_KEY);
    return 'ready';
  } catch {
    return 'unavailable';
  }
}
