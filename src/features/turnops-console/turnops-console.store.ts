import {
  clearTurnOpsConsole,
  loadTurnOpsConsole,
  saveTurnOpsConsole,
  type TurnOpsPanel,
  type TurnOpsRoute,
  type TurnOpsStorageStatus,
} from './turnops-console.repo';
import type { TurnRecord, TurnStatus } from '../../__fixtures__/turnops-console.fixture';

export interface TurnOpsCounts {
  total: number;
  delayed: number;
  completed: number;
  scheduled: number;
}

export interface TurnOpsState {
  route: TurnOpsRoute;
  activeScreen: string;
  selectedRecordId: string | null;
  selectedRecord: TurnRecord | null;
  records: TurnRecord[];
  itemCount: number;
  counts: TurnOpsCounts;
  storageStatus: TurnOpsStorageStatus;
  lastError: string | null;
  activePanel: TurnOpsPanel;
}

type Listener = () => void;

const routeToScreen: Record<TurnOpsRoute, string> = {
  operations: 'record-operations',
  board: 'status-board',
  insights: 'insights',
  editor: 'record-editor',
};

function getRouteFromPathname(): TurnOpsRoute | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const [, segment] = window.location.pathname.split('/');

  return segment === 'board' || segment === 'insights' || segment === 'editor' || segment === 'operations' ? segment : null;
}

function getCounts(records: TurnRecord[]): TurnOpsCounts {
  return records.reduce<TurnOpsCounts>(
    (counts, record) => {
      counts.total += 1;
      counts[record.status as TurnStatus] += 1;
      return counts;
    },
    { total: 0, delayed: 0, completed: 0, scheduled: 0 },
  );
}

function createInitialState(): TurnOpsState {
  const loaded = loadTurnOpsConsole();
  const firstRecordId = loaded.records[0]?.id ?? null;
  const selectedRecordId = loaded.records.some((record) => record.id === loaded.persisted.selectedRecordId)
    ? loaded.persisted.selectedRecordId ?? firstRecordId
    : firstRecordId;
  const route = getRouteFromPathname() ?? loaded.persisted.route ?? 'operations';
  const selectedRecord = loaded.records.find((record) => record.id === selectedRecordId) ?? null;

  return {
    route,
    activeScreen: routeToScreen[route],
    selectedRecordId,
    selectedRecord,
    records: loaded.records,
    itemCount: loaded.records.length,
    counts: getCounts(loaded.records),
    storageStatus: loaded.storageStatus,
    lastError: loaded.lastError,
    activePanel: loaded.persisted.activePanel ?? 'all',
  };
}

let state = createInitialState();
const listeners = new Set<Listener>();

function emit(nextState: TurnOpsState) {
  state = nextState;
  listeners.forEach((listener) => listener());
}

function persist(nextState: TurnOpsState): TurnOpsState {
  const storageStatus = saveTurnOpsConsole({
    route: nextState.route,
    selectedRecordId: nextState.selectedRecordId ?? undefined,
    activePanel: nextState.activePanel,
  });

  return storageStatus === nextState.storageStatus
    ? nextState
    : {
        ...nextState,
        storageStatus,
        lastError:
          storageStatus === 'unavailable'
            ? 'Local preferences could not be saved in this browser session.'
            : nextState.lastError,
      };
}

function withRoute(route: TurnOpsRoute, patch: Partial<TurnOpsState> = {}) {
  const nextState = persist({
    ...state,
    ...patch,
    route,
    activeScreen: routeToScreen[route],
  });
  emit(nextState);
}

export const turnOpsConsoleStore = {
  getSnapshot: () => state,
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  navigate(route: TurnOpsRoute) {
    withRoute(route);
  },
  setPanel(activePanel: TurnOpsPanel) {
    const nextState = persist({ ...state, activePanel });
    emit(nextState);
  },
  selectRecord(recordId: string) {
    const selectedRecord = state.records.find((record) => record.id === recordId) ?? state.selectedRecord;
    withRoute('editor', {
      selectedRecordId: selectedRecord?.id ?? null,
      selectedRecord: selectedRecord ?? null,
      activePanel: 'all',
    });
  },
  saveSelectedRecord() {
    withRoute('operations', { activePanel: 'all', lastError: null });
  },
  retryPersistence() {
    const nextState = persist({ ...state, lastError: null });
    emit({
      ...nextState,
      lastError:
        nextState.storageStatus === 'ready'
          ? 'TurnOps preferences were saved successfully.'
          : nextState.lastError ?? 'Local preferences could not be saved in this browser session.',
    });
  },
  clearPersistence() {
    const storageStatus = clearTurnOpsConsole();
    emit({
      ...createInitialState(),
      storageStatus,
      lastError:
        storageStatus === 'ready'
          ? 'Saved TurnOps preferences were cleared.'
          : 'Saved TurnOps preferences could not be cleared in this browser session.',
    });
  },
  reset() {
    emit(createInitialState());
  },
};
