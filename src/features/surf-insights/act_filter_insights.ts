import type { TurnRecord } from '../../__fixtures__/turnops-console.fixture';

export function filterInsights(records: TurnRecord[], query: string): TurnRecord[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return records;
  }

  return records.filter((record) =>
    [record.vessel, record.berth, record.status, record.eta, record.owner]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery),
  );
}
