export type TurnStatus = 'scheduled' | 'delayed' | 'completed';

export interface TurnRecord {
  id: string;
  vessel: string;
  berth: string;
  status: TurnStatus;
  eta: string;
  owner: string;
}

export const turnOpsFixtureRecords: TurnRecord[] = [
  {
    id: 'turn-1042',
    vessel: 'MV Meridian',
    berth: 'B12',
    status: 'scheduled',
    eta: '08:30',
    owner: 'Ops Lead',
  },
  {
    id: 'turn-1043',
    vessel: 'SS Harbor',
    berth: 'C03',
    status: 'delayed',
    eta: '09:45',
    owner: 'Dock Control',
  },
  {
    id: 'turn-1044',
    vessel: 'NQ Atlas',
    berth: 'A07',
    status: 'completed',
    eta: '07:15',
    owner: 'Yard Team',
  },
];
