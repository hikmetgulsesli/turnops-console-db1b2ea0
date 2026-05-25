import type { TurnRecord } from '../../__fixtures__/turnops-console.fixture';

export function createInsightsSummary(records: TurnRecord[]): string {
  const delayed = records.filter((record) => record.status === 'delayed').length;
  const completed = records.filter((record) => record.status === 'completed').length;

  return `${records.length} turns analyzed - ${delayed} delayed, ${completed} completed`;
}
