export interface Task {
  id: string
  prefix: string
  title: string
  priority: "low" | "medium" | "high"
  status: "pending" | "in-progress" | "completed"
  createdAt: string
  updatedAt: string
  dueDate: string
}

export interface PrefixConfig {
  id: string
  name: string
  color: string
}

export interface ActionLog {
  id: string
  taskId: string
  taskTitle: string
  action: "create" | "update" | "delete" | "status-change"
  details: string
  timestamp: string
  previousState?: Partial<Task>
  newState?: Partial<Task>
}

// ============================================
// 常量配置 - 集中管理
// ============================================

export const DEFAULT_PREFIXES: PrefixConfig[] = [
  { id: "1", name: "前端", color: "oklch(0.7 0.15 180)" },
  { id: "2", name: "后端", color: "oklch(0.65 0.18 150)" },
  { id: "3", name: "设计", color: "oklch(0.75 0.12 60)" },
  { id: "4", name: "测试", color: "oklch(0.6 0.15 220)" },
  { id: "5", name: "运维", color: "oklch(0.55 0.22 25)" },
]

export const STATUS_CONFIG = {
  pending: { label: "待处理", icon: "circle" },
  "in-progress": { label: "进行中", icon: "loader" },
  completed: { label: "已完成", icon: "check" },
} as const

export const PRIORITY_CONFIG = {
  low: { label: "低", color: "bg-muted-foreground/40" },
  medium: { label: "中", color: "bg-accent" },
  high: { label: "高", color: "bg-destructive" },
} as const

export const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"] as const

export const MONTH_NAMES = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
] as const
