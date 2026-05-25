// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - TurnOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Activity, ArrowDown, ArrowUp, BadgeCheck, Bell, CircleUserRound, Download, Grid3X3, ListFilter, PlaneTakeoff, Search, Settings, Timer, TriangleAlert, Users } from "lucide-react";


export type InsightsTurnopsConsoleActionId = "operations-1" | "board-2" | "insights-3" | "user-profile-4" | "notifications-5" | "settings-6" | "export-summary-7";

export interface InsightsTurnopsConsoleProps {
  actions?: Partial<Record<InsightsTurnopsConsoleActionId, () => void>>;
}

export function InsightsTurnopsConsole({ actions }: InsightsTurnopsConsoleProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="fixed left-0 top-0 h-full z-50 flex flex-col py-4 w-16 lg:w-60 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant dark:border-outline-variant transition-colors duration-300">
      {/* Header */}
      <div className="px-4 pb-6 flex items-center gap-3 border-b border-outline-variant mb-4 hidden lg:flex">
      <div className="h-8 w-8 bg-primary-container rounded flex items-center justify-center text-on-primary-container shrink-0">
      <PlaneTakeoff  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface leading-tight">TurnOps</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Ground Ops</p>
      </div>
      </div>
      <div className="flex lg:hidden justify-center pb-6 border-b border-outline-variant mb-4">
      <div className="h-8 w-8 bg-primary-container rounded flex items-center justify-center text-on-primary-container">
      <PlaneTakeoff  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Main Tabs */}
      <div className="flex-1 flex flex-col gap-1 px-2">
      {/* Operations (Inactive) */}
      <button className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group w-full text-left" type="button" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <PlaneTakeoff className="group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block uppercase">Operations</span>
      </button>
      {/* Board (Inactive) */}
      <button className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group w-full text-left" type="button" data-action-id="board-2" onClick={actions?.["board-2"]}>
      <Grid3X3 className="group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block uppercase">Board</span>
      </button>
      {/* Insights (Active) */}
      <button className="flex items-center gap-3 px-3 py-2 text-primary dark:text-primary-fixed-dim border-l-2 border-primary bg-surface-variant/30 transition-colors duration-150 ease-in-out w-full text-left" type="button" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <Activity  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block uppercase">Insights</span>
      </button>
      </div>
      {/* Footer Tab */}
      <div className="mt-auto px-2 border-t border-outline-variant pt-4">
      <button className="flex items-center gap-3 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group w-full text-left" type="button" data-action-id="user-profile-4" onClick={actions?.["user-profile-4"]}>
      <CircleUserRound className="group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block uppercase">User Profile</span>
      </button>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col ml-16 lg:ml-60 transition-colors duration-300 relative h-full">
      {/* Shared Component: TopAppBar */}
      <header className="fixed top-0 right-0 left-16 lg:left-60 z-40 flex justify-between items-center px-gutter h-10 bg-surface-dim dark:bg-surface-dim border-b border-outline-variant dark:border-outline-variant">
      {/* Brand / Product Name */}
      <div className="flex items-center gap-2">
      <span className="font-headline-md text-headline-md font-black tracking-tight text-on-surface">LHR</span>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-4">
      <div className="font-data-tabular text-data-tabular text-primary dark:text-primary-fixed border-r border-outline-variant pr-4 hidden sm:block">
                          12:45 UTC
                      </div>
      {/* Search (on_right) */}
      <div className="relative hidden md:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="h-6 w-48 bg-surface-container text-body-sm text-on-surface placeholder:text-outline border border-outline-variant rounded pl-8 pr-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search flights..." type="text" />
      </div>
      {/* Icon Actions */}
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-1 rounded cursor-pointer active:opacity-80 transition-colors" type="button" data-action-id="notifications-5" onClick={actions?.["notifications-5"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-1 rounded cursor-pointer active:opacity-80 transition-colors hidden sm:block" type="button" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      {/* Profile Image Placeholder */}
      <div className="h-6 w-6 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden shrink-0 cursor-pointer">
      <img alt="Operational User" className="w-full h-full object-cover" data-alt="A tightly cropped, high-contrast black and white portrait of an aviation ground operations supervisor wearing a technical headset. The lighting is clinical and directional, casting strong shadows that emphasize a deterministic, focused expression. The background is a pure, stark black void, highlighting the industrial precision and high-stakes environment of modern airport operations without any distracting elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx77goYQqG6egQYbJjWk0PvGELv4ciGKFsZ2fRWC_-pz7hkF8HUWqbaCLaYWONpftFYE9mLZ4MMx9ERAeUdzMScTPmdodlkq02KM4Ss1wumbtuR05iy50yxqHfiEhm75Akmcbdf8Z7z3flYOYythjGpMDfxbvAi43AjVNHYLyPcmThzdt4gdtkOcDp05Ag5WgaCcAqR5BmUDm9433XrRrE5k1H3PBFf4EV5O8nedXVD7OUL-qogLWpIgjAQ9UETY-N6thf7B5zKy2b" />
      </div>
      </div>
      </header>
      {/* Canvas Area */}
      <main className="flex-1 overflow-y-auto mt-10 p-container-padding bg-background">
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-gutter">
      <div>
      <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">Shift Performance</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Terminal 2 &amp; 5 aggregated metrics. Filtered by active blocks.</p>
      </div>
      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant hover:border-primary text-on-surface font-label-caps text-label-caps transition-colors rounded" type="button" data-action-id="export-summary-7" onClick={actions?.["export-summary-7"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                          EXPORT SUMMARY
                      </button>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter auto-rows-min">
      {/* Compact Metrics Row */}
      {/* Metric 1 */}
      <div className="bg-surface-container-high border border-outline-variant rounded p-4 flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Avg Turnaround</span>
      <Timer className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-primary">42</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">min</span>
      </div>
      <div className="font-body-sm text-body-sm text-tertiary-container flex items-center gap-1 mt-1">
      <ArrowDown className="text-[14px]" aria-hidden={true} focusable="false" /> -3m vs target
                          </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface-container-high border border-outline-variant rounded p-4 flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">OTP (D0)</span>
      <BadgeCheck className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-on-surface">84.2</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">%</span>
      </div>
      <div className="font-body-sm text-body-sm text-error-container flex items-center gap-1 mt-1">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> -1.5% vs shift start
                          </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface-container-high border border-outline-variant rounded p-4 flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Active Alerts</span>
      <TriangleAlert className="text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-error">03</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">critical</span>
      </div>
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                              Requires immediate intervention
                          </div>
      </div>
      {/* Metric 4 (Spans 1 col on LG, hidden on smaller to balance grid if needed, or just 4th block) */}
      <div className="bg-surface-container-high border border-outline-variant rounded p-4 flex flex-col justify-between h-[120px] hidden lg:flex">
      <div className="flex justify-between items-start">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Resource Util</span>
      <Users className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-display-lg text-display-lg text-on-surface">92</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">%</span>
      </div>
      <div className="w-full bg-surface-bright h-1 mt-2 rounded overflow-hidden">
      <div className="bg-primary h-full w-[92%]"></div>
      </div>
      </div>
      {/* State Distribution Chart (Delay Attribution) - Spans 2/3 cols */}
      <div className="bg-surface-container-high border border-outline-variant rounded p-4 md:col-span-2 lg:col-span-3 min-h-[300px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Delay Attribution (Current Shift)</h3>
      <div className="flex gap-2">
      <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-error-container"></span> Ground</span>
      <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> ATC</span>
      <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-outline"></span> Weather</span>
      </div>
      </div>
      {/* Clinical Chart Implementation (Data Bars) */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
      {/* Row 1 */}
      <div className="grid grid-cols-[80px_1fr_40px] items-center gap-4">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant text-right">08:00z</span>
      <div className="h-6 w-full bg-surface-bright flex rounded-sm overflow-hidden border border-outline-variant/30">
      <div className="h-full bg-error-container border-r border-background" style={{width: "45%"}}></div>
      <div className="h-full bg-secondary-container border-r border-background" style={{width: "20%"}}></div>
      <div className="h-full bg-outline" style={{width: "10%"}}></div>
      </div>
      <span className="font-data-tabular text-data-tabular text-on-surface">75m</span>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-[80px_1fr_40px] items-center gap-4">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant text-right">09:00z</span>
      <div className="h-6 w-full bg-surface-bright flex rounded-sm overflow-hidden border border-outline-variant/30">
      <div className="h-full bg-error-container border-r border-background" style={{width: "30%"}}></div>
      <div className="h-full bg-secondary-container border-r border-background" style={{width: "40%"}}></div>
      <div className="h-full bg-outline" style={{width: "5%"}}></div>
      </div>
      <span className="font-data-tabular text-data-tabular text-on-surface">62m</span>
      </div>
      {/* Row 3 */}
      <div className="grid grid-cols-[80px_1fr_40px] items-center gap-4">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant text-right">10:00z</span>
      <div className="h-6 w-full bg-surface-bright flex rounded-sm overflow-hidden border border-outline-variant/30">
      <div className="h-full bg-error-container border-r border-background" style={{width: "60%"}}></div>
      <div className="h-full bg-secondary-container border-r border-background" style={{width: "10%"}}></div>
      <div className="h-full bg-outline" style={{width: "10%"}}></div>
      </div>
      <span className="font-data-tabular text-data-tabular text-on-surface">88m</span>
      </div>
      {/* Row 4 */}
      <div className="grid grid-cols-[80px_1fr_40px] items-center gap-4">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant text-right">11:00z</span>
      <div className="h-6 w-full bg-surface-bright flex rounded-sm overflow-hidden border border-outline-variant/30">
      <div className="h-full bg-error-container border-r border-background" style={{width: "25%"}}></div>
      <div className="h-full bg-secondary-container border-r border-background" style={{width: "15%"}}></div>
      <div className="h-full bg-outline" style={{width: "30%"}}></div>
      </div>
      <span className="font-data-tabular text-data-tabular text-on-surface">45m</span>
      </div>
      </div>
      </div>
      {/* Recent Activity Feed - Spans 1 col */}
      <div className="bg-surface-container-high border border-outline-variant rounded flex flex-col md:col-span-1 lg:col-span-1 min-h-[300px]">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Event Log</h3>
      <ListFilter className="text-[16px] text-outline cursor-pointer hover:text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 overflow-y-auto p-2">
      <ul className="flex flex-col">
      {/* Feed Item */}
      <li className="px-2 py-3 border-b border-surface-bright last:border-0 hover:bg-surface-bright/50 transition-colors cursor-default">
      <div className="flex justify-between items-start mb-1">
      <span className="font-data-tabular text-body-sm text-primary">BA142</span>
      <span className="font-data-tabular text-body-sm text-on-surface-variant">12:42</span>
      </div>
      <div className="font-body-md text-body-md text-on-surface">
                                          B12 Fueling Completed
                                      </div>
      <div className="mt-1">
      <span className="inline-block px-1.5 py-0.5 bg-tertiary-container/15 text-tertiary font-label-caps text-[9px] rounded border border-tertiary/20 uppercase tracking-wider">Milestone</span>
      </div>
      </li>
      {/* Feed Item */}
      <li className="px-2 py-3 border-b border-surface-bright last:border-0 hover:bg-surface-bright/50 transition-colors cursor-default">
      <div className="flex justify-between items-start mb-1">
      <span className="font-data-tabular text-body-sm text-primary">VS009</span>
      <span className="font-data-tabular text-body-sm text-on-surface-variant">12:38</span>
      </div>
      <div className="font-body-md text-body-md text-on-surface">
                                          C04 Tug Disconnected
                                      </div>
      <div className="mt-1">
      <span className="inline-block px-1.5 py-0.5 bg-surface-bright text-on-surface-variant font-label-caps text-[9px] rounded border border-outline-variant uppercase tracking-wider">Log</span>
      </div>
      </li>
      {/* Feed Item */}
      <li className="px-2 py-3 border-b border-surface-bright last:border-0 hover:bg-surface-bright/50 transition-colors cursor-default">
      <div className="flex justify-between items-start mb-1">
      <span className="font-data-tabular text-body-sm text-primary">UA931</span>
      <span className="font-data-tabular text-body-sm text-on-surface-variant">12:30</span>
      </div>
      <div className="font-body-md text-body-md text-on-surface">
                                          A21 Catering Delayed (T+15)
                                      </div>
      <div className="mt-1">
      <span className="inline-block px-1.5 py-0.5 bg-error-container/15 text-error font-label-caps text-[9px] rounded border border-error/20 uppercase tracking-wider">Exception</span>
      </div>
      </li>
      {/* Feed Item */}
      <li className="px-2 py-3 border-b border-surface-bright last:border-0 hover:bg-surface-bright/50 transition-colors cursor-default">
      <div className="flex justify-between items-start mb-1">
      <span className="font-data-tabular text-body-sm text-primary">AF118</span>
      <span className="font-data-tabular text-body-sm text-on-surface-variant">12:15</span>
      </div>
      <div className="font-body-md text-body-md text-on-surface">
                                          B08 Chocks On
                                      </div>
      <div className="mt-1">
      <span className="inline-block px-1.5 py-0.5 bg-tertiary-container/15 text-tertiary font-label-caps text-[9px] rounded border border-tertiary/20 uppercase tracking-wider">Milestone</span>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
