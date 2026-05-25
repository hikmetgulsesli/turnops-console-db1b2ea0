// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - TurnOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Activity, Bell, CheckCircle2, ChevronRight, CircleUserRound, EllipsisVertical, Grid3X3, ListFilter, PlaneLanding, PlaneTakeoff, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type RecordOperationsTurnopsConsoleActionId = "notifications-1" | "settings-2" | "all-turns-3" | "delayed-4" | "completed-5" | "filter-list-6" | "more-vert-7" | "chevron-right-8" | "chevron-right-9" | "chevron-right-10" | "operations-1" | "board-2" | "insights-3" | "user-profile-4";

export interface RecordOperationsTurnopsConsoleProps {
  actions?: Partial<Record<RecordOperationsTurnopsConsoleActionId, () => void>>;
}

export function RecordOperationsTurnopsConsole({ actions }: RecordOperationsTurnopsConsoleProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low docked h-full w-16 lg:w-60 left-0 top-0 border-r border-outline-variant dark:border-outline-variant flat no shadows fixed left-0 top-0 z-50 flex flex-col py-4 flex-shrink-0 transition-colors duration-300">
      {/* Header */}
      <div className="px-4 mb-8 flex items-center space-x-3 overflow-hidden">
      <button className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center flex-shrink-0" type="button" aria-label="Open operations" onClick={actions?.["operations-1"]}>
      <PlaneTakeoff  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-primary" aria-hidden={true} focusable="false" />
      <span className="sr-only">flight_takeoff</span>
      </button>
      <div className="hidden lg:block">
      <div className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface truncate">TurnOps</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">Ground Ops</div>
      </div>
      </div>
      {/* Main Nav */}
      <div className="flex-1 overflow-y-auto space-y-1 px-2">
      {/* Active Tab: Operations */}
      <a className="flex items-center px-2 py-3 rounded-DEFAULT text-primary dark:text-primary-fixed-dim border-l-2 border-primary bg-surface-variant/30 transition-colors duration-150 ease-in-out group" href="#" title="Operations" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <PlaneTakeoff className="w-6 text-center" aria-hidden={true} focusable="false" />
      <span className="ml-3 hidden lg:block font-label-caps text-label-caps truncate">Operations</span>
      </a>
      <a className="flex items-center px-2 py-3 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group border-l-2 border-transparent" href="#" title="Board" data-action-id="board-2" onClick={actions?.["board-2"]}>
      <Grid3X3 className="w-6 text-center" aria-hidden={true} focusable="false" />
      <span className="ml-3 hidden lg:block font-label-caps text-label-caps truncate">Board</span>
      </a>
      <a className="flex items-center px-2 py-3 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group border-l-2 border-transparent" href="#" title="Insights" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <Activity className="w-6 text-center" aria-hidden={true} focusable="false" />
      <span className="ml-3 hidden lg:block font-label-caps text-label-caps truncate">Insights</span>
      </a>
      </div>
      {/* Footer Nav */}
      <div className="px-2 mt-auto">
      <a className="flex items-center px-2 py-3 rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group border-l-2 border-transparent" href="#" title="User Profile" data-action-id="user-profile-4" onClick={actions?.["user-profile-4"]}>
      <CircleUserRound className="w-6 text-center" aria-hidden={true} focusable="false" />
      <span className="ml-3 hidden lg:block font-label-caps text-label-caps truncate">User Profile</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <div className="flex-1 flex flex-col ml-16 lg:ml-60 h-screen overflow-hidden bg-background">
      {/* TopAppBar Component */}
      <header className="bg-surface-dim dark:bg-surface-dim docked full-width top-0 h-10 border-b border-outline-variant dark:border-outline-variant flat no shadows fixed top-0 right-0 left-16 lg:left-60 z-40 flex justify-between items-center px-gutter transition-colors duration-300">
      <div className="flex items-center">
      <span className="font-headline-md text-headline-md font-black tracking-tight text-on-surface">LHR</span>
      </div>
      <div className="flex items-center space-x-4">
      {/* Search */}
      <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant rounded-DEFAULT px-2 py-1 h-7">
      <Search className="text-on-surface-variant text-[16px] mr-1" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none text-body-sm font-body-sm text-on-surface focus:outline-none focus:ring-0 w-48 p-0 h-full placeholder:text-on-surface-variant" placeholder="Search flight, gate, reg..." type="text" />
      </div>
      <div className="text-on-surface-variant font-data-tabular text-data-tabular">12:45 UTC</div>
      <div className="flex items-center space-x-2">
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-1 rounded-DEFAULT transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="notifications-1" aria-label="Open notifications" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-1 rounded-DEFAULT transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="settings-2" aria-label="Open settings" onClick={actions?.["settings-2"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden ml-2 cursor-pointer">
      <img alt="Operational User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjeSYqpgmO-YM38g4ji3KhUiKuVG4rFjLaZuCiVbPMeCtvbKLfg84rgoNq6boZ6eXgrp3k4ylLTry-Px00QpIQraxv35H08zwKF4IpMu0Fe1LjTK0QZswnK-M-DErHUH0T47K4hz3mcU0-I_Qj-eN6OXZdWLYkHLvndpPZahMjFOURWBIeBuT2GZYRac2m6EumQA16K1rg-x13LsidrgK1w6REIv0FRIDgPtu8ojPDtZBLe5DDqh6sw2Eq7bTil9czLfWqBfxFw1Uz" />
      </div>
      </div>
      </div>
      </header>
      {/* Dashboard Content */}
      <main className="flex-1 overflow-y-auto mt-10 p-gutter space-y-gutter scrollbar-hide">
      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      {/* Metric Card 1 */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-3 flex flex-col justify-between h-24">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Active Turns</span>
      <RefreshCw className="text-primary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline space-x-2">
      <span className="font-display-lg text-display-lg text-on-surface">42</span>
      <span className="font-body-sm text-body-sm text-tertiary">+3 vs hr</span>
      </div>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-3 flex flex-col justify-between h-24">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Gate Readiness</span>
      <CheckCircle2 className="text-tertiary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline space-x-2">
      <span className="font-display-lg text-display-lg text-on-surface">94%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">SLA 95%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-1 mt-2 rounded-full overflow-hidden">
      <div className="bg-tertiary h-full w-[94%]"></div>
      </div>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT p-3 flex flex-col justify-between h-24">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Inbound Next Hr</span>
      <PlaneLanding className="text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline space-x-2">
      <span className="font-display-lg text-display-lg text-on-surface">18</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Flights</span>
      </div>
      </div>
      {/* Metric Card 4 - Urgent */}
      <div className="bg-surface-container-low border border-error/50 rounded-DEFAULT p-3 flex flex-col justify-between h-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-error/5 pointer-events-none"></div>
      <div className="flex justify-between items-start relative z-10">
      <span className="font-label-caps text-label-caps text-error uppercase">Urgent Alerts</span>
      <TriangleAlert className="text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline space-x-2 relative z-10">
      <span className="font-display-lg text-display-lg text-error">3</span>
      <span className="font-body-sm text-body-sm text-error/80">Requires Action</span>
      </div>
      </div>
      </div>
      {/* Operations Data Table */}
      <div className="bg-surface-container-low border border-outline-variant rounded-DEFAULT flex flex-col h-[calc(100vh-14rem)]">
      {/* Table Controls */}
      <div className="flex justify-between items-center p-3 border-b border-outline-variant">
      <div className="flex space-x-2">
      <button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-3 py-1.5 rounded-DEFAULT hover:opacity-90 transition-opacity" type="button" data-action-id="all-turns-3" onClick={actions?.["all-turns-3"]}>ALL TURNS</button>
      <button className="bg-transparent border border-outline-variant text-on-surface font-label-caps text-label-caps px-3 py-1.5 rounded-DEFAULT hover:bg-surface-container-high transition-colors" type="button" data-action-id="delayed-4" onClick={actions?.["delayed-4"]}>DELAYED</button>
      <button className="bg-transparent border border-outline-variant text-on-surface font-label-caps text-label-caps px-3 py-1.5 rounded-DEFAULT hover:bg-surface-container-high transition-colors" type="button" data-action-id="completed-5" onClick={actions?.["completed-5"]}>COMPLETED</button>
      </div>
      <div className="flex space-x-2">
      <button className="text-on-surface-variant p-1 rounded-DEFAULT hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant" type="button" data-action-id="filter-list-6" aria-label="Filter turns" onClick={actions?.["filter-list-6"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant p-1 rounded-DEFAULT hover:bg-surface-container-high transition-colors border border-transparent hover:border-outline-variant" type="button" data-action-id="more-vert-7" aria-label="Open more turn actions" onClick={actions?.["more-vert-7"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Table Container */}
      <div className="flex-1 overflow-auto scrollbar-thin">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-container-low z-10">
      <tr className="border-b border-outline-variant">
      <th className="py-2 px-3 font-label-caps text-label-caps text-on-surface-variant uppercase w-24">Flight</th>
      <th className="py-2 px-3 font-label-caps text-label-caps text-on-surface-variant uppercase w-20">Gate</th>
      <th className="py-2 px-3 font-label-caps text-label-caps text-on-surface-variant uppercase w-24">STD/ETD</th>
      <th className="py-2 px-3 font-label-caps text-label-caps text-on-surface-variant uppercase w-32">Status</th>
      <th className="py-2 px-3 font-label-caps text-label-caps text-on-surface-variant uppercase">Turn Progress</th>
      <th className="py-2 px-3 font-label-caps text-label-caps text-on-surface-variant uppercase w-16 text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-data-tabular text-data-tabular divide-y divide-outline-variant/50">
      {/* Row 1 */}
      <tr className="hover:bg-surface-container-high transition-colors group h-row-md">
      <td className="py-1 px-3 text-on-surface">BA124</td>
      <td className="py-1 px-3 text-on-surface">T5-A10</td>
      <td className="py-1 px-3">
      <div className="flex flex-col">
      <span className="text-on-surface">14:00</span>
      <span className="text-on-surface-variant text-[10px]">14:05</span>
      </div>
      </td>
      <td className="py-1 px-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded-DEFAULT bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase">
                                              Boarding
                                          </span>
      </td>
      <td className="py-1 px-3">
      <div className="flex items-center space-x-1">
      {/* Fuel */}
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden" title="Fueling: Complete">
      <div className="h-full bg-tertiary w-full"></div>
      </div>
      {/* Catering */}
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden" title="Catering: Complete">
      <div className="h-full bg-tertiary w-full"></div>
      </div>
      {/* Baggage */}
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden" title="Baggage: In Progress">
      <div className="h-full bg-primary w-[60%]"></div>
      </div>
      </div>
      </td>
      <td className="py-1 px-3 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" data-action-id="chevron-right-8" aria-label="Open BAW123 turn details" onClick={actions?.["chevron-right-8"]}>
      <ChevronRight className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 2 Alert */}
      <tr className="bg-error/5 hover:bg-error/10 transition-colors group h-row-md border-l-2 border-l-error">
      <td className="py-1 px-3 text-on-surface">AA051</td>
      <td className="py-1 px-3 text-on-surface">T3-B22</td>
      <td className="py-1 px-3">
      <div className="flex flex-col">
      <span className="line-through text-on-surface-variant">14:15</span>
      <span className="text-error">14:45</span>
      </div>
      </td>
      <td className="py-1 px-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded-DEFAULT bg-error/10 text-error border border-error/20 text-[11px] font-bold uppercase">
                                              Tug Delay
                                          </span>
      </td>
      <td className="py-1 px-3">
      <div className="flex items-center space-x-1">
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-tertiary w-full"></div>
      </div>
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-error w-[20%]"></div>
      </div>
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-surface-container-highest w-0"></div>
      </div>
      </div>
      </td>
      <td className="py-1 px-3 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" data-action-id="chevron-right-9" aria-label="Open AA051 turn details" onClick={actions?.["chevron-right-9"]}>
      <ChevronRight className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-high transition-colors group h-row-md">
      <td className="py-1 px-3 text-on-surface">VS201</td>
      <td className="py-1 px-3 text-on-surface">T3-A04</td>
      <td className="py-1 px-3">
      <div className="flex flex-col">
      <span className="text-on-surface">14:30</span>
      <span className="text-on-surface-variant text-[10px]">--:--</span>
      </div>
      </td>
      <td className="py-1 px-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded-DEFAULT bg-surface-container-highest text-on-surface-variant border border-outline-variant text-[11px] font-bold uppercase">
                                              Scheduled
                                          </span>
      </td>
      <td className="py-1 px-3">
      <div className="flex items-center space-x-1">
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-surface-container-highest w-0"></div>
      </div>
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-surface-container-highest w-0"></div>
      </div>
      <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-surface-container-highest w-0"></div>
      </div>
      </div>
      </td>
      <td className="py-1 px-3 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" data-action-id="chevron-right-10" aria-label="Open VS201 turn details" onClick={actions?.["chevron-right-10"]}>
      <ChevronRight className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </main>
      </div>
      <style>{`
              /* Hide scrollbar for Chrome, Safari and Opera */
              .scrollbar-hide::-webkit-scrollbar {
                  display: none;
              }
              /* Hide scrollbar for IE, Edge and Firefox */
              .scrollbar-hide {
                  -ms-overflow-style: none;  /* IE and Edge */
                  scrollbar-width: none;  /* Firefox */
              }
              
              /* Custom thin scrollbar for table */
              .scrollbar-thin::-webkit-scrollbar {
                  width: 4px;
                  height: 4px;
              }
              .scrollbar-thin::-webkit-scrollbar-track {
                  background: transparent;
              }
              .scrollbar-thin::-webkit-scrollbar-thumb {
                  background: #3e4850; 
                  border-radius: 4px;
              }
              .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                  background: #88929b; 
              }
          `}</style>
    </>
  );
}
