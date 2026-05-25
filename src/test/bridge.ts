import type { TurnOpsState } from '../features/turnops-console/turnops-console.store';

export type TurnOpsAppBridge = Pick<
  TurnOpsState,
  'activeScreen' | 'route' | 'selectedRecord' | 'selectedRecordId' | 'counts' | 'storageStatus' | 'lastError' | 'activePanel'
>;

declare global {
  interface Window {
    app?: TurnOpsAppBridge;
  }
}

export function toTurnOpsAppBridge(state: TurnOpsState): TurnOpsAppBridge {
  return {
    activeScreen: state.activeScreen,
    route: state.route,
    selectedRecord: state.selectedRecord,
    selectedRecordId: state.selectedRecordId,
    counts: state.counts,
    storageStatus: state.storageStatus,
    lastError: state.lastError,
    activePanel: state.activePanel,
  };
}
