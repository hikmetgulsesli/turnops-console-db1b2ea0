// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Board - TurnOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Activity, Bell, CircleUserRound, Grid3X3, ListFilter, PlaneTakeoff, Plus, Search, Settings, TriangleAlert, UserMinus } from "lucide-react";


export type StatusBoardTurnopsConsoleActionId = "notifications-1" | "settings-2" | "filter-3" | "new-turn-4" | "operations-1" | "board-2" | "insights-3" | "user-profile-4";

export interface StatusBoardTurnopsConsoleProps {
  actions?: Partial<Record<StatusBoardTurnopsConsoleActionId, () => void>>;
}

export function StatusBoardTurnopsConsole({ actions }: StatusBoardTurnopsConsoleProps) {
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
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="#" title="Operations" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <PlaneTakeoff className="group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="hidden lg:block font-label-caps text-label-caps uppercase tracking-wider">Operations</span>
      </a>
      {/* Tab: Board (ACTIVE) */}
      {/* CRITICAL: Applying style_active_navigation correctly based on JSON */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-primary dark:text-primary-fixed-dim border-l-2 border-primary bg-surface-variant/30 transition-colors duration-150 ease-in-out" href="#" title="Board" data-action-id="board-2" onClick={actions?.["board-2"]}>
      <Grid3X3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="hidden lg:block font-label-caps text-label-caps uppercase tracking-wider font-bold">Board</span>
      </a>
      {/* Tab: Insights */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="#" title="Insights" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <Activity className="group-hover:text-on-surface" aria-hidden={true} focusable="false" />
      <span className="hidden lg:block font-label-caps text-label-caps uppercase tracking-wider">Insights</span>
      </a>
      </nav>
      {/* Footer / Profile */}
      <div className="mt-auto px-2">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="#" title="User Profile" data-action-id="user-profile-4" onClick={actions?.["user-profile-4"]}>
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
      <input className="bg-transparent border-none text-body-sm font-body-sm text-on-surface focus:ring-0 w-24 px-2 h-full placeholder:text-outline" placeholder="Flight ID..." type="text" />
      </div>
      {/* Icon Actions */}
      <div className="flex items-center gap-1">
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest cursor-pointer active:opacity-80 transition-colors" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest cursor-pointer active:opacity-80 transition-colors" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
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
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> 42 Total</span>
      <span className="flex items-center gap-1 ml-2"><span className="w-2 h-2 rounded-full bg-error inline-block"></span> 3 Critical</span>
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
      {/* COLUMN: Pre-Arrival */}
      <div className="kanban-column bg-surface-container flex flex-col rounded-DEFAULT border border-outline-variant overflow-hidden" data-status="pre-arrival">
      {/* Column Header */}
      <div className="px-3 py-2 bg-surface-container-highest border-b border-outline-variant flex justify-between items-center shrink-0">
      <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Pre-Arrival</span>
      <span className="font-data-tabular text-data-tabular text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded-DEFAULT text-[10px]">14</span>
      </div>
      {/* Cards Container */}
      <div className="flex-1 overflow-y-auto p-unit flex flex-col gap-unit">
      {/* Card 1 */}
      <div className="kanban-card bg-surface border border-outline-variant rounded-DEFAULT p-2 flex flex-col gap-2 cursor-grab hover:border-primary transition-colors" draggable="true">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
      <span className="font-data-tabular text-data-tabular text-primary font-bold">BAW12A</span>
      <span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant border border-outline-variant">A12</span>
      </div>
      <span className="font-data-tabular text-data-tabular text-on-surface-variant text-[12px]">ETA 13:05</span>
      </div>
      <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[10%]"></div>
      </div>
      <div className="flex gap-1 flex-wrap">
      <span className="font-label-caps text-[9px] px-1 py-0.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant uppercase border border-outline-variant">A350</span>
      </div>
      </div>
      {/* Card 2 (Delayed) */}
      <div className="kanban-card bg-surface border border-error-container/50 rounded-DEFAULT p-2 flex flex-col gap-2 cursor-grab hover:border-error transition-colors" draggable="true">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
      <span className="font-data-tabular text-data-tabular text-on-surface font-bold">AFR456</span>
      <span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant border border-outline-variant">B04</span>
      </div>
      <span className="font-data-tabular text-data-tabular text-error text-[12px] font-bold">ETA 13:45</span>
      </div>
      <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-error w-[5%]"></div>
      </div>
      <div className="flex gap-1 flex-wrap">
      {/* Priority Marker */}
      <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded-DEFAULT bg-error/10 text-error uppercase border border-error/30 flex items-center gap-1">
      <TriangleAlert  style={{fontSize: "10px"}} aria-hidden={true} focusable="false" /> Delayed (ATC)
                                          </span>
      </div>
      </div>
      </div>
      </div>
      {/* COLUMN: On-Block / In-Turn */}
      <div className="kanban-column bg-surface-container flex flex-col rounded-DEFAULT border border-outline-variant overflow-hidden" data-status="in-turn">
      {/* Column Header */}
      <div className="px-3 py-2 bg-surface-container-highest border-b border-outline-variant flex justify-between items-center shrink-0">
      <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                      On-Block / In-Turn
                                  </span>
      <span className="font-data-tabular text-data-tabular text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded-DEFAULT text-[10px]">8</span>
      </div>
      {/* Cards Container */}
      <div className="flex-1 overflow-y-auto p-unit flex flex-col gap-unit">
      {/* Card 3 */}
      <div className="kanban-card bg-surface border-l-2 border-l-tertiary border-y border-y-outline-variant border-r border-r-outline-variant rounded-DEFAULT p-2 flex flex-col gap-2 cursor-grab hover:border-primary transition-colors" draggable="true">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
      <span className="font-data-tabular text-data-tabular text-on-surface font-bold">DLH789</span>
      <span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant border border-outline-variant">C22</span>
      </div>
      <span className="font-data-tabular text-data-tabular text-on-surface-variant text-[12px] bg-surface-container px-1 py-0.5 rounded-DEFAULT">T-45m</span>
      </div>
      {/* Micro Gantt representation */}
      <div className="flex flex-col gap-0.5">
      <div className="flex text-[8px] font-label-caps text-on-surface-variant uppercase justify-between">
      <span>Cleaning</span>
      <span>Catering</span>
      <span>Fuel</span>
      </div>
      <div className="flex h-1.5 w-full bg-surface-container-high rounded-sm overflow-hidden gap-px">
      <div className="bg-tertiary h-full flex-1"></div>
      <div className="bg-primary h-full flex-[2] relative overflow-hidden">
      <div className="absolute inset-0 bg-white/20 w-1/2 animate-[progress_2s_linear_infinite]"></div>
      </div>
      <div className="bg-outline-variant h-full flex-1"></div>
      </div>
      </div>
      <div className="flex gap-1 flex-wrap mt-1">
      <span className="font-label-caps text-[9px] px-1 py-0.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant uppercase border border-outline-variant">A320</span>
      <span className="font-label-caps text-[9px] px-1 py-0.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant uppercase border border-outline-variant">Pax: 142</span>
      </div>
      </div>
      {/* Card 4 (Crew Missing Warning) */}
      <div className="kanban-card bg-surface border-l-2 border-l-secondary-container border-y border-y-secondary-container/50 border-r border-r-secondary-container/50 rounded-DEFAULT p-2 flex flex-col gap-2 cursor-grab hover:border-secondary transition-colors" draggable="true">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
      <span className="font-data-tabular text-data-tabular text-on-surface font-bold">UAL001</span>
      <span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant border border-outline-variant">A05</span>
      </div>
      <span className="font-data-tabular text-data-tabular text-secondary text-[12px] font-bold">T-20m</span>
      </div>
      <div className="flex gap-1 flex-wrap mt-1">
      {/* Priority Marker */}
      <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded-DEFAULT bg-secondary-container/15 text-secondary-container uppercase border border-secondary-container/30 flex items-center gap-1 w-full">
      <UserMinus  style={{fontSize: "10px"}} aria-hidden={true} focusable="false" /> Missing Flight Crew (2)
                                          </span>
      </div>
      </div>
      </div>
      </div>
      {/* COLUMN: Departing */}
      <div className="kanban-column bg-surface-container flex flex-col rounded-DEFAULT border border-outline-variant overflow-hidden" data-status="departing">
      {/* Column Header */}
      <div className="px-3 py-2 bg-surface-container-highest border-b border-outline-variant flex justify-between items-center shrink-0">
      <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Departing</span>
      <span className="font-data-tabular text-data-tabular text-on-surface-variant bg-surface-container-lowest px-1.5 py-0.5 rounded-DEFAULT text-[10px]">5</span>
      </div>
      {/* Cards Container */}
      <div className="flex-1 overflow-y-auto p-unit flex flex-col gap-unit">
      {/* Card 5 */}
      <div className="kanban-card bg-surface border border-outline-variant rounded-DEFAULT p-2 flex flex-col gap-2 cursor-grab hover:border-primary transition-colors opacity-80" draggable="true">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
      <span className="font-data-tabular text-data-tabular text-outline font-bold">UAE333</span>
      <span className="font-label-caps text-label-caps px-1.5 py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant border border-outline-variant">B11</span>
      </div>
      <span className="font-data-tabular text-data-tabular text-tertiary text-[12px]">Pushing</span>
      </div>
      <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-tertiary w-full"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Minimal vanilla JS for drag and drop visual feedback (interactions as requested) */}
      
    </>
  );
}
