import type { TurnRecord } from '../../__fixtures__/turnops-console.fixture';

export function selectRecord(records: TurnRecord[], recordId: string): TurnRecord | null {
  return records.find((record) => record.id === recordId) ?? null;
}
