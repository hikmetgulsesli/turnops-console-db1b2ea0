import { useEffect, useMemo, useSyncExternalStore } from 'react';
import {
  InsightsTurnopsConsole,
  RecordEditorTurnopsConsole,
  RecordOperationsTurnopsConsole,
  StatusBoardTurnopsConsole,
  type InsightsTurnopsConsoleActionId,
  type RecordEditorTurnopsConsoleActionId,
  type RecordOperationsTurnopsConsoleActionId,
  type StatusBoardTurnopsConsoleActionId,
} from './screens';
import { turnOpsConsoleStore } from './features/turnops-console/turnops-console.store';
import { toTurnOpsAppBridge } from './test/bridge';

export default function App() {
  const state = useSyncExternalStore(
    turnOpsConsoleStore.subscribe,
    turnOpsConsoleStore.getSnapshot,
    turnOpsConsoleStore.getSnapshot,
  );

  useEffect(() => {
    window.app = toTurnOpsAppBridge(state);
  }, [state]);

  const shellActions = useMemo(() => {
    const openOperations = () => turnOpsConsoleStore.navigate('operations');
    const openBoard = () => turnOpsConsoleStore.navigate('board');
    const openInsights = () => turnOpsConsoleStore.navigate('insights');
    const openSettings = () => turnOpsConsoleStore.setPanel('settings');
    const openNotifications = () => turnOpsConsoleStore.setPanel('notifications');

    return {
      openOperations,
      openBoard,
      openInsights,
      openSettings,
      openNotifications,
    };
  }, []);

  const operationsActions = useMemo(
    () =>
      ({
        'notifications-1': shellActions.openNotifications,
        'settings-2': shellActions.openSettings,
        'all-turns-3': () => turnOpsConsoleStore.setPanel('all'),
        'delayed-4': () => turnOpsConsoleStore.setPanel('delayed'),
        'completed-5': () => turnOpsConsoleStore.setPanel('completed'),
        'filter-list-6': () => turnOpsConsoleStore.setPanel('filters'),
        'more-vert-7': () => turnOpsConsoleStore.setPanel('filters'),
        'chevron-right-8': () => turnOpsConsoleStore.selectRecord(state.records[0]?.id ?? ''),
        'chevron-right-9': () => turnOpsConsoleStore.selectRecord(state.records[1]?.id ?? state.records[0]?.id ?? ''),
        'chevron-right-10': () => turnOpsConsoleStore.selectRecord(state.records[2]?.id ?? state.records[0]?.id ?? ''),
        'operations-1': shellActions.openOperations,
        'board-2': shellActions.openBoard,
        'insights-3': shellActions.openInsights,
        'user-profile-4': () => turnOpsConsoleStore.setPanel('settings'),
      }) satisfies Partial<Record<RecordOperationsTurnopsConsoleActionId, () => void>>,
    [shellActions, state.records],
  );

  const boardActions = useMemo(
    () =>
      ({
        'notifications-1': shellActions.openNotifications,
        'settings-2': shellActions.openSettings,
        'filter-3': () => turnOpsConsoleStore.setPanel('filters'),
        'new-turn-4': () => turnOpsConsoleStore.navigate('editor'),
        'operations-1': shellActions.openOperations,
        'board-2': shellActions.openBoard,
        'insights-3': shellActions.openInsights,
        'user-profile-4': () => turnOpsConsoleStore.setPanel('settings'),
      }) satisfies Partial<Record<StatusBoardTurnopsConsoleActionId, () => void>>,
    [shellActions],
  );

  const insightsActions = useMemo(
    () =>
      ({
        'operations-1': shellActions.openOperations,
        'board-2': shellActions.openBoard,
        'insights-3': shellActions.openInsights,
        'user-profile-4': () => turnOpsConsoleStore.setPanel('settings'),
        'notifications-5': shellActions.openNotifications,
        'settings-6': shellActions.openSettings,
        'export-summary-7': () => turnOpsConsoleStore.setPanel('completed'),
      }) satisfies Partial<Record<InsightsTurnopsConsoleActionId, () => void>>,
    [shellActions],
  );

  const editorActions = useMemo(
    () =>
      ({
        'notifications-1': shellActions.openNotifications,
        'settings-2': shellActions.openSettings,
        'cancel-3': shellActions.openOperations,
        'save-record-4': () => turnOpsConsoleStore.saveSelectedRecord(),
        'operations-1': shellActions.openOperations,
        'board-2': shellActions.openBoard,
        'insights-3': shellActions.openInsights,
        'user-profile-4': () => turnOpsConsoleStore.setPanel('settings'),
      }) satisfies Partial<Record<RecordEditorTurnopsConsoleActionId, () => void>>,
    [shellActions],
  );

  const storageMessage =
    state.storageStatus === 'ready'
      ? state.lastError ?? 'TurnOps preferences are saved locally.'
      : state.storageStatus === 'recovered'
        ? state.lastError ?? 'Saved TurnOps preferences were reset.'
        : state.lastError ?? 'Local preferences are unavailable.';

  return (
    <div className="turnops-shell flex min-h-screen" data-setfarm-root="turnops-console" data-active-screen={state.activeScreen}>
      {state.route === 'operations' ? <RecordOperationsTurnopsConsole actions={operationsActions} /> : null}
      {state.route === 'board' ? <StatusBoardTurnopsConsole actions={boardActions} /> : null}
      {state.route === 'insights' ? <InsightsTurnopsConsole actions={insightsActions} /> : null}
      {state.route === 'editor' ? <RecordEditorTurnopsConsole actions={editorActions} /> : null}
      <div className="sr-only" role="status" aria-live="polite">
        {storageMessage}
      </div>
    </div>
  );
}
