// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - TurnOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Activity, Bell, CheckCircle2, ChevronDown, CircleAlert, CircleUserRound, Clock, DoorOpen, FilePenLine, Grid3X3, PlaneLanding, PlaneTakeoff, RefreshCw, Save, Settings } from "lucide-react";


export type RecordEditorTurnopsConsoleActionId = "notifications-1" | "settings-2" | "cancel-3" | "save-record-4" | "operations-1" | "board-2" | "insights-3" | "user-profile-4";

export interface RecordEditorTurnopsConsoleProps {
  actions?: Partial<Record<RecordEditorTurnopsConsoleActionId, () => void>>;
}

export function RecordEditorTurnopsConsole({ actions }: RecordEditorTurnopsConsoleProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary-fixed font-headline-md text-headline-md docked h-full w-16 lg:w-60 left-0 top-0 border-r border-outline-variant dark:border-outline-variant flat no shadows fixed z-50 flex flex-col py-4 transition-colors duration-300">
      {/* Header */}
      <div className="px-4 mb-8 flex items-center gap-3 overflow-hidden">
      <button className="w-8 h-8 rounded bg-primary-container flex items-center justify-center shrink-0" type="button" aria-label="flight_takeoff" onClick={actions?.["operations-1"]}>
      <PlaneTakeoff  style={{fontSize: "18px"}} className="text-on-primary-container" aria-hidden={true} focusable="false" />
      <span className="sr-only">flight_takeoff</span>
      </button>
      <div className="flex-col hidden lg:flex">
      <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface uppercase tracking-wider leading-none">TurnOps</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest leading-none mt-1">Ground Ops</span>
      </div>
      </div>
      {/* Navigation Tabs */}
      <ul className="flex flex-col gap-2 px-2 flex-grow">
      {/* Active Tab: Operations (Matches context of editing a turnaround record) */}
      <li>
      <a className="flex items-center gap-4 px-3 py-2 rounded text-primary dark:text-primary-fixed-dim border-l-2 border-primary bg-surface-variant/30 hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <PlaneTakeoff className="group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block tracking-wider uppercase">Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-4 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant border-l-2 border-transparent hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="#" data-action-id="board-2" onClick={actions?.["board-2"]}>
      <Grid3X3 className="group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block tracking-wider uppercase">Board</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-4 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant border-l-2 border-transparent hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <Activity className="group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block tracking-wider uppercase">Insights</span>
      </a>
      </li>
      </ul>
      {/* Footer Tab */}
      <div className="px-2 mt-auto">
      <a className="flex items-center gap-4 px-3 py-2 rounded text-on-surface-variant dark:text-on-surface-variant border-l-2 border-transparent hover:bg-surface-container-high dark:hover:bg-surface-container-high hover:text-on-surface transition-colors duration-150 ease-in-out group" href="#" data-action-id="user-profile-4" onClick={actions?.["user-profile-4"]}>
      <CircleUserRound className="group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps hidden lg:block tracking-wider uppercase">User Profile</span>
      </a>
      </div>
      </nav>
      {/* TopAppBar */}
      <header className="bg-surface-dim dark:bg-surface-dim text-primary dark:text-primary-fixed font-headline-md text-headline-md docked full-width top-0 h-10 border-b border-outline-variant dark:border-outline-variant flat no shadows fixed right-0 left-16 lg:left-60 z-40 flex justify-between items-center px-gutter transition-colors duration-300">
      {/* Left: Brand / Context */}
      <div className="flex items-center gap-4">
      <span className="font-headline-md text-headline-md font-black tracking-tight text-on-surface uppercase">LHR</span>
      <div className="h-4 w-[1px] bg-outline-variant"></div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <PlaneLanding className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-data-tabular text-data-tabular text-on-surface">BAW123</span>
      </div>
      </div>
      {/* Right: Actions & User */}
      <div className="flex items-center gap-4">
      <span className="font-data-tabular text-data-tabular text-on-surface-variant tracking-wider">12:45 UTC</span>
      <div className="h-4 w-[1px] bg-outline-variant"></div>
      <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-1 rounded cursor-pointer active:opacity-80 transition-colors" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest p-1 rounded cursor-pointer active:opacity-80 transition-colors" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="h-6 w-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden ml-2">
      {/* DataStore Placeholder Exception: No data-alt needed */}
      <img alt="Operational User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd36rvnDdmUAmccICtOJLBZbpHxJ8PreYnpXljH_I53MmR8mn14vyltSreccp8jzvZLM-BCp7QTJD2ETThjo6QfUFH5ZgWO982tsuaUVfBSprc3CeQKzCqPC13CuhhaDpJaJissZBlaR2Mx8vP_CLT1WNYwm-EXRskB_owyMOPyQZ52qbEOOweW3hZBbIdvZGBIx3evvPsZOV_06xwp9Z2dw8a_JExUAqhOVbKqwKdEa71RPbyuQ_F65Kw58DQH8YGEmpt8J1a765c" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="ml-16 lg:ml-60 mt-10 p-6 lg:p-8 flex-1 h-[calc(100vh-2.5rem)] overflow-y-auto w-full transition-colors duration-300 bg-background relative flex justify-center">
      {/* Form Container: Focused & Constrained Width */}
      <div className="w-full max-w-2xl mt-4">
      {/* Page Header */}
      <div className="mb-8 flex items-end justify-between border-b border-outline-variant pb-4">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface mb-1 flex items-center gap-2">
      <FilePenLine className="text-primary-container" aria-hidden={true} focusable="false" />
                              Edit Turnaround Record
                          </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Update operational status and timings for flight BAW123.</p>
      </div>
      <div className="px-2 py-1 bg-surface-container-high border border-outline-variant rounded flex items-center gap-2 text-primary-container">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
      <span className="font-label-caps text-label-caps uppercase tracking-wider">In Progress</span>
      </div>
      </div>
      {/* The Form */}
      <form className="space-y-8 flex flex-col gap-6">
      {/* Section: Flight Logistics */}
      <fieldset className="bg-surface-container rounded-lg border border-outline-variant p-5 shadow-sm">
      <legend className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest px-2 ml-[-8px] bg-surface-container">Logistics</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-2">
      {/* Flight Number (Read-only aesthetic) */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="flightNumber">Flight Number</label>
      <input className="bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-data-tabular text-data-tabular h-row-height-md px-3 rounded focus:outline-none cursor-not-allowed" id="flightNumber" readOnly={true} type="text" value="BAW123" />
      </div>
      {/* Gate */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface" htmlFor="gate">Gate Assignment <span className="text-error">*</span></label>
      <div className="relative">
      <DoorOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-high border border-outline-variant text-on-surface font-data-tabular text-data-tabular h-row-height-md pl-9 pr-3 rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="gate" required={true} type="text" defaultValue="T5-B34" />
      </div>
      </div>
      {/* Arrival Time */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface" htmlFor="arrivalTime">Actual Arrival (ATA)</label>
      <input className="w-full bg-surface-container-high border border-outline-variant text-on-surface font-data-tabular text-data-tabular h-row-height-md px-3 rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="arrivalTime" type="time" defaultValue="11:42" />
      </div>
      {/* Departure Time (Showing Validation Error State) */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-error" htmlFor="departureTime">Est. Departure (ETD) <span className="text-error">*</span></label>
      <input className="w-full bg-surface-container-high border border-error text-on-surface font-data-tabular text-data-tabular h-row-height-md px-3 rounded focus:outline-none focus:border-error focus:ring-1 focus:ring-error transition-colors shadow-[0_0_0_1px_rgba(255,180,171,0.2)]" id="departureTime" required={true} type="time" />
      <span className="font-body-sm text-body-sm text-error mt-1 flex items-center gap-1">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                      ETD is required for clearance.
                                  </span>
      </div>
      </div>
      </fieldset>
      {/* Section: Ground Services Status */}
      <fieldset className="bg-surface-container rounded-lg border border-outline-variant p-5 shadow-sm">
      <legend className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest px-2 ml-[-8px] bg-surface-container">Ground Services</legend>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      {/* Fueling */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface flex justify-between" htmlFor="fuelingStatus">
                                      Fueling
                                      <CheckCircle2 className="text-[14px] text-tertiary-container" aria-hidden={true} focusable="false" />
      </label>
      <div className="relative">
      <select className="appearance-none w-full bg-surface-container-high border border-outline-variant text-on-surface font-body-sm text-body-sm h-row-height-sm px-3 pr-8 rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors cursor-pointer" id="fuelingStatus">
      <option value="pending">Pending</option>
      <option value="active">Active</option>
      <option selected={true} value="completed">Completed</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Catering */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface flex justify-between" htmlFor="cateringStatus">
                                      Catering
                                      <RefreshCw  style={{animationDuration: "3s"}} className="text-[14px] text-primary-container animate-spin" aria-hidden={true} focusable="false" />
      </label>
      <div className="relative">
      <select className="appearance-none w-full bg-surface-container-high border border-primary-container text-on-surface font-body-sm text-body-sm h-row-height-sm px-3 pr-8 rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors cursor-pointer shadow-[0_0_0_1px_rgba(14,165,233,0.3)]" id="cateringStatus">
      <option value="pending">Pending</option>
      <option selected={true} value="active">Active</option>
      <option value="completed">Completed</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Baggage */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface flex justify-between" htmlFor="baggageStatus">
                                      Baggage
                                      <Clock className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </label>
      <div className="relative">
      <select className="appearance-none w-full bg-surface-container-high border border-outline-variant text-on-surface font-body-sm text-body-sm h-row-height-sm px-3 pr-8 rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors cursor-pointer" id="baggageStatus">
      <option selected={true} value="pending">Pending</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </fieldset>
      {/* Remarks / Notes */}
      <div className="flex flex-col gap-1">
      <label className="font-label-caps text-label-caps text-on-surface" htmlFor="remarks">Operational Remarks</label>
      <textarea className="w-full bg-surface-container-high border border-outline-variant text-on-surface font-body-sm text-body-sm p-3 rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors resize-none" id="remarks" placeholder="Enter any specific notes regarding delays, special cargo, etc." rows={3}></textarea>
      </div>
      {/* Form Actions (Sticky Bottom aesthetic, but inline here) */}
      <div className="pt-6 border-t border-outline-variant flex items-center justify-end gap-3 mt-4">
      <button className="h-row-height-md px-6 font-label-caps text-label-caps uppercase tracking-wider text-on-surface bg-transparent border border-outline-variant rounded hover:bg-surface-container-highest transition-colors flex items-center justify-center" type="button" data-action-id="cancel-3" onClick={actions?.["cancel-3"]}>
                              Cancel
                          </button>
      <button className="h-row-height-md px-6 font-label-caps text-label-caps uppercase tracking-wider text-on-primary-container bg-primary-container border border-primary-container rounded hover:bg-primary-fixed transition-colors shadow-sm flex items-center justify-center gap-2" type="button" data-action-id="save-record-4" onClick={actions?.["save-record-4"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Record
                          </button>
      </div>
      </form>
      </div>
      </main>
      
    </>
  );
}
