import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
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
import { createInsightsSummary } from './features/surf-insights/act_export_summary';
import { filterInsights } from './features/surf-insights/act_filter_insights';
import { searchRecords } from './features/surf-status-board/act_search_records';
import { updateRecordStatus } from './features/surf-status-board/act_update_record_status';

export default function App() {
  const state = useSyncExternalStore(
    turnOpsConsoleStore.subscribe,
    turnOpsConsoleStore.getSnapshot,
    turnOpsConsoleStore.getSnapshot,
  );
  const [insightsQuery, setInsightsQuery] = useState('');
  const [insightsSummary, setInsightsSummary] = useState<string | null>(null);
  const [boardQuery, setBoardQuery] = useState('');
  const [boardFilter, setBoardFilter] = useState<'all' | 'delayed'>('all');
  const [boardRecords, setBoardRecords] = useState(state.records);

  useEffect(() => {
    window.app = toTurnOpsAppBridge(state);
  }, [state]);

  const filteredInsightRecords = useMemo(
    () => filterInsights(state.records, insightsQuery),
    [insightsQuery, state.records],
  );

  const visibleBoardRecords = useMemo(() => {
    const searchedRecords = searchRecords(boardRecords, boardQuery);
    return boardFilter === 'delayed'
      ? searchedRecords.filter((record) => record.status === 'delayed')
      : searchedRecords;
  }, [boardFilter, boardQuery, boardRecords]);

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
        'filter-3': () => setBoardFilter((currentFilter) => (currentFilter === 'all' ? 'delayed' : 'all')),
        'new-turn-4': () => {
          const scheduledRecord = boardRecords.find((record) => record.status === 'scheduled') ?? boardRecords[0];
          if (scheduledRecord) {
            setBoardRecords((currentRecords) => updateRecordStatus(currentRecords, scheduledRecord.id, 'delayed'));
          }
        },
        'operations-1': shellActions.openOperations,
        'board-2': shellActions.openBoard,
        'insights-3': shellActions.openInsights,
        'user-profile-4': () => turnOpsConsoleStore.setPanel('settings'),
      }) satisfies Partial<Record<StatusBoardTurnopsConsoleActionId, () => void>>,
    [boardRecords, shellActions],
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
        'export-summary-7': () => setInsightsSummary(createInsightsSummary(filteredInsightRecords)),
      }) satisfies Partial<Record<InsightsTurnopsConsoleActionId, () => void>>,
    [filteredInsightRecords, shellActions],
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
    <div className="turnops-shell flex min-h-screen w-full" data-setfarm-root="turnops-console" data-active-screen={state.activeScreen}>
      {state.route === 'operations' ? <RecordOperationsTurnopsConsole actions={operationsActions} /> : null}
      {state.route === 'board' ? (
        <StatusBoardTurnopsConsole
          actions={boardActions}
          filterMode={boardFilter}
          onSearchQueryChange={setBoardQuery}
          records={visibleBoardRecords}
          searchQuery={boardQuery}
          selectedRecordId={state.selectedRecordId}
        />
      ) : null}
      {state.route === 'insights' ? (
        <InsightsTurnopsConsole
          actions={insightsActions}
          filterText={insightsQuery}
          onFilterTextChange={setInsightsQuery}
          records={filteredInsightRecords}
          summaryText={insightsSummary}
        />
      ) : null}
      {state.route === 'editor' ? <RecordEditorTurnopsConsole actions={editorActions} /> : null}
      <div className="sr-only" role="status" aria-live="polite">
        {storageMessage}
      </div>
    </div>
  );
}
