import type { TurnRecord, TurnStatus } from '../../__fixtures__/turnops-console.fixture';

export function updateRecordStatus(records: TurnRecord[], recordId: string, status: TurnStatus): TurnRecord[] {
  return records.map((record) => (record.id === recordId ? { ...record, status } : record));
}
