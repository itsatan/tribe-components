"use client";
import { BarChart3, CheckCircle2, CircleDashed } from "lucide-react";

export function TaskSummaryCard() {
    return (
        <div className="bg-[#1f1f25] border border-white/5 rounded-xl p-4 shadow-md shadow-black/20 text-neutral-200 space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-400">总任务</span>
                <BarChart3 className="h-4 w-4 text-neutral-500" />
            </div>

            <div className="text-3xl font-bold">124</div>

            <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    <span>92 完成</span>
                </div>

                <div className="flex items-center gap-1">
                    <CircleDashed className="h-4 w-4 text-yellow-400" />
                    <span>32 未完成</span>
                </div>
            </div>
        </div>
    );
}
