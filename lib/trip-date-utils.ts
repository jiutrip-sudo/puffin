export function parseISODate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDaysISO(value: string, days: number): string {
  const date = parseISODate(value);
  if (!date) return value;
  date.setDate(date.getDate() + days);
  return toISODate(date);
}

export function computeTripEndDate(start: string, tripDays: number): string {
  if (!start || tripDays < 1) return "";
  return addDaysISO(start, tripDays - 1);
}

export function formatDisplayDate(value: string): string {
  const date = parseISODate(value);
  if (!date) return "";
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export function isDateInRange(
  date: Date,
  min?: string,
  max?: string,
): boolean {
  const iso = toISODate(date);
  if (min && iso < min) return false;
  if (max && iso > max) return false;
  return true;
}

export function clampViewMonth(
  month: Date,
  min?: string,
  max?: string,
): Date {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  if (min) {
    const minDate = parseISODate(min);
    if (minDate && year < minDate.getFullYear()) {
      return new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    }
    if (
      minDate &&
      year === minDate.getFullYear() &&
      monthIndex < minDate.getMonth()
    ) {
      return new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    }
  }

  if (max) {
    const maxDate = parseISODate(max);
    if (maxDate && year > maxDate.getFullYear()) {
      return new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
    }
    if (
      maxDate &&
      year === maxDate.getFullYear() &&
      monthIndex > maxDate.getMonth()
    ) {
      return new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
    }
  }

  return new Date(year, monthIndex, 1);
}

export function getInitialViewMonth(
  value?: string,
  min?: string,
  max?: string,
): Date {
  const fromValue = value ? parseISODate(value) : null;
  if (fromValue) {
    return clampViewMonth(
      new Date(fromValue.getFullYear(), fromValue.getMonth(), 1),
      min,
      max,
    );
  }

  const today = new Date();
  const todayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  if (isDateInRange(today, min, max)) {
    return clampViewMonth(todayMonth, min, max);
  }

  if (min) {
    const minDate = parseISODate(min);
    if (minDate) {
      return clampViewMonth(
        new Date(minDate.getFullYear(), minDate.getMonth(), 1),
        min,
        max,
      );
    }
  }

  return todayMonth;
}

export function getCalendarCells(viewMonth: Date): Array<{
  date: Date;
  inMonth: boolean;
}> {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<{ date: Date; inMonth: boolean }> = [];

  for (let i = 0; i < firstWeekday; i++) {
    cells.push({
      date: new Date(year, month, -firstWeekday + i + 1),
      inMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({ date: new Date(year, month, day), inMonth: true });
  }

  while (cells.length % 7 !== 0) {
    const dayOffset = cells.length - firstWeekday - daysInMonth + 1;
    cells.push({
      date: new Date(year, month + 1, dayOffset),
      inMonth: false,
    });
  }

  return cells;
}

export function canNavigateMonth(
  viewMonth: Date,
  direction: -1 | 1,
  min?: string,
  max?: string,
): boolean {
  const target = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth() + direction,
    1,
  );
  return clampViewMonth(target, min, max).getTime() === target.getTime();
}
