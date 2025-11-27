"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { WEEKDAYS, MONTH_NAMES } from "@/lib/types"
import { getDaysInMonth, isSameDay, isSameMonth, formatDateKey } from "@/lib/date-utils"

interface CalendarStripProps {
    selectedDate: Date
    onDateSelect: (date: Date) => void
    taskCounts: Record<string, number>
}

export function CalendarStrip({ selectedDate, onDateSelect, taskCounts }: CalendarStripProps) {
    const today = useMemo(() => new Date(), [])

    const dates = useMemo(() => {
        return getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth())
    }, [selectedDate])

    const goToPrevMonth = () => {
        onDateSelect(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))
    }

    const goToNextMonth = () => {
        onDateSelect(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))
    }

    const goToToday = () => onDateSelect(new Date())

    const isCurrentMonth = isSameMonth(today, selectedDate)
    const isSelectedToday = isSameDay(today, selectedDate)

    return (
        <div className="w-full border-b border-[rgba(204,221,255,.12)] px-3 py-2">
            <div className="flex items-center justify-between mb-2">
                <button onClick={goToPrevMonth} className="p-1 rounded hover:bg-gray-700 transition-colors cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5 text-gray-400" />
                </button>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-200">
                        {selectedDate.getFullYear()} {MONTH_NAMES[selectedDate.getMonth()]}
                    </span>
                    {(!isCurrentMonth || !isSelectedToday) && (
                        <button
                            onClick={goToToday}
                            className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 transition-colors cursor-pointer"
                            title="回到今天"
                        >
                            今
                        </button>
                    )}
                </div>
                <button onClick={goToNextMonth} className="p-1 rounded hover:bg-gray-700 transition-colors cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </button>
            </div>
            <div className="flex justify-between gap-px">
                {dates.map((date) => {
                    const dateKey = formatDateKey(date)
                    const count = taskCounts[dateKey] || 0
                    const selected = isSameDay(date, selectedDate)
                    const isToday = isSameDay(date, today)
                    return (
                        <button
                            key={dateKey}
                            onClick={() => onDateSelect(date)}
                            className={cn(
                                "flex flex-col items-center py-1 rounded transition-all duration-150 min-w-0 flex-1",
                                "hover:bg-gray-700",
                                selected && "bg-blue-500/10 ring-1 ring-blue-400/50",
                                isToday && !selected && "ring-1 ring-yellow-400/30",
                            )}
                        >
                            <span className={cn(
                                "text-[8px] uppercase",
                                selected ? "text-blue-400" : isToday ? "text-yellow-400" : "text-gray-400"
                            )}>
                                {WEEKDAYS[date.getDay()]}
                            </span>
                            <span
                                className={cn(
                                    "text-[10px] font-medium",
                                    selected ? "text-blue-400" : isToday ? "text-yellow-400" : "text-gray-200",
                                )}
                            >
                                {date.getDate()}
                            </span>
                            <div
                                className={cn(
                                    "w-1 h-1 rounded-full transition-all duration-200",
                                    count > 0 && (selected ? "bg-blue-400" : "bg-gray-500"),
                                    count === 0 && "opacity-0"
                                )}
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
