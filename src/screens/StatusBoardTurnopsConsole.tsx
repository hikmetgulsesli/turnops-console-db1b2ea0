// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Board - TurnOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Activity, Bell, CircleUserRound, Grid3X3, ListFilter, PlaneTakeoff, Plus, Search, Settings, TriangleAlert, UserMinus } from "lucide-react";
import type { MouseEvent } from "react";
import type { TurnRecord, TurnStatus } from "../__fixtures__/turnops-console.fixture";


export type StatusBoardTurnopsConsoleActionId = "notifications-1" | "settings-2" | "filter-3" | "new-turn-4" | "operations-1" | "board-2" | "insights-3" | "user-profile-4";

export interface StatusBoardTurnopsConsoleProps {
  actions?: Partial<Record<StatusBoardTurnopsConsoleActionId, () => void>>;
  filterMode?: "all" | "delayed";
  onSearchQueryChange?: (query: string) => void;
  records?: TurnRecord[];
  searchQuery?: string;
  selectedRecordId?: string | null;
}

const boardColumns: Array<{ status: TurnStatus; title: string }> = [
  { status: "scheduled", title: "Pre-Arrival" },
  { status: "delayed", title: "On-Block / In-Turn" },
  { status: "completed", title: "Departing" },
];

function getFlightCode(record: TurnRecord) {
  return record.vessel.replace(/[^a-z0-9]/gi, "").slice(0, 6).toUpperCase() || record.id.toUpperCase();
}

function getProgressClass(record: TurnRecord) {
  if (record.status === "completed") {
    return "w-full bg-tertiary";
  }

  if (record.status === "delayed") {
    return "w-[45%] bg-error";
  }

  return "w-[15%] bg-primary";
}

function runNavAction(event: MouseEvent<HTMLAnchorElement>, action?: () => void) {
  event.preventDefault();
  action?.();
}

export function StatusBoardTurnopsConsole({
  actions,
  filterMode = "all",
  onSearchQueryChange,
  records = [],
  searchQuery = "",
  selectedRecordId,
}: StatusBoardTurnopsConsoleProps) {
  const totalTurns = records.length;
  const delayedTurns = records.filter((record) => record.status === "delayed").length;

  return (
    <>
      {/* Shared Component: SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary-fixed border-r border-outline-variant dark:border-outline-variant fixed left-0 top-0 h-full z-50 flex flex-col py-4 w-16 lg:w-60 transition-colors duration-300">
      {/* Header / Logo */}
      <div className="px-4 mb-8 flex items-center justify-center lg:justify-start gap-3">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center shrink-0">
      <PlaneTakeoff  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="hidden lg:block overflow-hidden">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface truncate">TurnOps</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Ground Ops</p>
      </div>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 flex flex-col gap-1 px-2">
      {/* Tab: Operations */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="/operations" title="Operations" data-action-id="operations-1" onClick={(event) => runNavAction(event, actions?.["operations-1"])}>
      <PlaneTakeoff className="group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="hidden lg:block font-label-caps text-label-caps uppercase tracking-wider">Operations</span>
      </a>
      {/* Tab: Board (ACTIVE) */}
      {/* CRITICAL: Applying style_active_navigation correctly based on JSON */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-primary dark:text-primary-fixed-dim border-l-2 border-primary bg-surface-variant/30 transition-colors duration-150 ease-in-out" href="/board" title="Board" data-action-id="board-2" aria-current="page" onClick={(event) => runNavAction(event, actions?.["board-2"])}>
      <Grid3X3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="hidden lg:block font-label-caps text-label-caps uppercase tracking-wider font-bold">Board</span>
      </a>
      {/* Tab: Insights */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="/insights" title="Insights" data-action-id="insights-3" onClick={(event) => runNavAction(event, actions?.["insights-3"])}>
      <Activity className="group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="hidden lg:block font-label-caps text-label-caps uppercase tracking-wider">Insights</span>
      </a>
      </nav>
      {/* Footer / Profile */}
      <div className="mt-auto px-2">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="/profile" title="User Profile" data-action-id="user-profile-4" onClick={(event) => runNavAction(event, actions?.["user-profile-4"])}>
      <CircleUserRound className="group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="hidden lg:block font-label-caps text-label-caps uppercase tracking-wider">User Profile</span>
      </a>
      </div>
      </aside>
      {/* Main Content Wrapper (Accounts for SideNav width) */}
      <div className="flex-1 flex flex-col ml-16 lg:ml-60 h-screen w-full relative">
      {/* Shared Component: TopAppBar */}
      <header className="bg-surface-dim dark:bg-surface-dim text-primary dark:text-primary-fixed border-b border-outline-variant dark:border-outline-variant fixed top-0 right-0 left-16 lg:left-60 z-40 flex justify-between items-center px-gutter h-10 transition-colors duration-300">
      {/* Brand/Product */}
      <div className="flex items-center gap-unit">
      <span className="font-headline-md text-headline-md font-black tracking-tight text-on-surface uppercase">LHR</span>
      <div className="h-4 w-px bg-outline-variant mx-2"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Command Center</span>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4">
      {/* Time */}
      <span className="font-data-tabular text-data-tabular text-on-surface-variant bg-surface px-2 py-1 rounded-DEFAULT border border-outline-variant">12:45 UTC</span>
      {/* Search (Implicit from instructions, adding visual cue) */}
      <div className="hidden md:flex items-center bg-surface border border-outline-variant rounded-DEFAULT h-6 px-2 focus-within:border-primary transition-colors">
      <Search  style={{fontSize: "16px"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none text-body-sm font-body-sm text-on-surface focus:ring-0 w-24 px-2 h-full placeholder:text-outline" placeholder="Flight ID..." type="text" value={searchQuery} onChange={(event) => onSearchQueryChange?.(event.currentTarget.value)} />
      </div>
      {/* Icon Actions */}
      <div className="flex items-center gap-1">
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest cursor-pointer active:opacity-80 transition-colors" type="button" data-action-id="notifications-1" aria-label="Open notifications" onClick={actions?.["notifications-1"]}>
      <Bell  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest cursor-pointer active:opacity-80 transition-colors" type="button" data-action-id="settings-2" aria-label="Open settings" onClick={actions?.["settings-2"]}>
      <Settings  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Canvas: Kanban Board */}
      {/* pt-10 accounts for the h-10 TopAppBar */}
      <main className="pt-10 flex-1 overflow-hidden bg-background flex flex-col">
      {/* Board Controls Toolbar */}
      <div className="px-gutter py-2 border-b border-outline-variant bg-surface flex items-center justify-between shrink-0 h-12">
      <div className="flex items-center gap-4">
      <h2 className="font-headline-md text-headline-md text-on-surface">Terminal 5 Turns</h2>
      <div className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant">
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> {totalTurns} Total</span>
      <span className="flex items-center gap-1 ml-2"><span className="w-2 h-2 rounded-full bg-error inline-block"></span> {delayedTurns} Critical</span>
      <span className="flex items-center gap-1 ml-2"><span className="w-2 h-2 rounded-full bg-outline inline-block"></span> {filterMode === "delayed" ? "Delayed filter" : "All turns"}</span>
      </div>
      </div>
      <div className="flex gap-2">
      <button className="px-3 py-1 text-body-sm font-body-sm border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-container transition-colors flex items-center gap-1" type="button" data-action-id="filter-3" onClick={actions?.["filter-3"]}>
      <ListFilter  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" /> Filter
                          </button>
      <button className="px-3 py-1 text-body-sm font-body-sm bg-primary text-on-primary font-bold rounded-DEFAULT hover:bg-primary-fixed transition-colors flex items-center gap-1" type="button" data-action-id="new-turn-4" onClick={actions?.["new-turn-4"]}>
      <Plus  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" /> New Turn
                          </button>
      </div>
      </div>
      {/* Kanban Grid */}
      <div className="flex-1 p-gutter overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-unit h-full w-full">
      {boardColumns.map((column) => {
        const columnRecords = records.filter((record) => record.status === column.status);

        return (
          <div className="kanban-column bg-surface-container flex flex-col rounded-DEFAULT border border-outline-variant overflow-hidden" data-status={column.status} key={column.status}>
          <div className="px-3 py-2 bg-surface-container-highest border-b border-outline-variant flex justify-between items-center shrink-0">
          <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest flex items-center gap-2">
          {column.status === "delayed" ? <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> : null}
          {column.title}
          </span>
          <span className="font-data-tabular text-data-tabular text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded-DEFAULT text-[10px]">{columnRecords.length}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-unit flex flex-col gap-unit">
          {columnRecords.length === 0 ? (
            <div className="kanban-card bg-surface border border-outline-variant rounded-DEFAULT p-2 flex flex-col gap-2 opacity-80">
            <span className="font-body-sm text-body-sm text-on-surface-variant">No turns match this board view.</span>
            </div>
          ) : (
            columnRecords.map((record) => (
              <div className={`kanban-card bg-surface ${record.status === "delayed" ? "border border-error-container/50 hover:border-error" : record.status === "completed" ? "border border-outline-variant opacity-80" : "border border-outline-variant hover:border-primary"} rounded-DEFAULT p-2 flex flex-col gap-2 cursor-grab transition-colors ${record.id === selectedRecordId ? "ring-1 ring-primary" : ""}`} draggable="true" data-record-id={record.id} key={record.id}>
              <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
              <span className={`font-data-tabular text-data-tabular font-bold ${record.status === "scheduled" ? "text-primary" : record.status === "delayed" ? "text-on-surface" : "text-outline"}`}>{getFlightCode(record)}</span>
              <span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant border border-outline-variant">{record.berth}</span>
              </div>
              <span className={`font-data-tabular text-data-tabular text-[12px] ${record.status === "delayed" ? "text-error font-bold" : record.status === "completed" ? "text-tertiary" : "text-on-surface-variant"}`}>{record.status === "completed" ? "Complete" : `ETA ${record.eta}`}</span>
              </div>
              <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className={`h-full ${getProgressClass(record)}`}></div>
              </div>
              <div className="flex gap-1 flex-wrap">
              <span className="font-label-caps text-[9px] px-1 py-0.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant uppercase border border-outline-variant">{record.owner}</span>
              {record.status === "delayed" ? (
                <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded-DEFAULT bg-error/10 text-error uppercase border border-error/30 flex items-center gap-1">
                <TriangleAlert  style={{fontSize: "10px"}} aria-hidden={true} focusable="false" /> Delayed turn
                </span>
              ) : null}
              {record.status === "scheduled" ? (
                <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded-DEFAULT bg-secondary-container/15 text-secondary-container uppercase border border-secondary-container/30 flex items-center gap-1">
                <UserMinus  style={{fontSize: "10px"}} aria-hidden={true} focusable="false" /> Crew pending
                </span>
              ) : null}
              </div>
              </div>
            ))
          )}
          </div>
          </div>
        );
      })}
      </div>
      </div>
      </main>
      </div>
      {/* Minimal vanilla JS for drag and drop visual feedback (interactions as requested) */}
      
    </>
  );
}
