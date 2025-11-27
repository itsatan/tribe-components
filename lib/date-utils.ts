export function formatDateKey(date: Date): string {
  return date.toISOString().split("T")[0]
}

export function formatFullDateTime(dateStr: string): string {
  const date = new Date(dateStr)
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${date.getFullYear()}年${pad(date.getMonth() + 1)}月${pad(date.getDate())}日${pad(date.getHours())}时${pad(date.getMinutes())}分${pad(date.getSeconds())}秒`
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString()
}

export function isSameMonth(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth()
}

export function getDaysInMonth(year: number, month: number): Date[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))
}
