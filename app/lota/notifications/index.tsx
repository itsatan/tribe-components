"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Bullet } from "./bullet";
import NotificationItem from "./notification-item";
import type { Notification } from "@/types/dashboard";
import { AnimatePresence, motion } from "framer-motion";
import { NotionPromptForm } from "../components/notion-prompt-form";

interface NotificationsProps {
    initialNotifications: Notification[];
}

export default function Notifications({
    initialNotifications,
}: NotificationsProps) {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

    const unreadCount = notifications.length;

    const markAsRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
        );
    };

    const deleteNotification = (id: string) => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    };

    return (
        <div className="text-card-foreground flex flex-col gap-2 rounded-lg p-2.5 bg-[#fafafa06]">
            <div className="h-8 flex items-center justify-between pl-3">
                <div className="flex items-center gap-2.5 text-xs font-medium uppercase">
                    {unreadCount > 0 ? <Badge>{unreadCount}</Badge> : <Bullet />}
                    Tasks
                </div>
                <span className="ml-auto text-xs text-muted-foreground block">
                    Last updated 12:05
                </span>
            </div>
            <div className="bg-accent p-2.5 overflow-hidden rounded-lg">
                <div className="space-y-2">
                    <AnimatePresence initial={false} mode="popLayout">
                        {notifications.map((notification) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                key={notification.id}
                            >
                                <NotificationItem
                                    notification={notification}
                                    onMarkAsRead={markAsRead}
                                    onDelete={deleteNotification}
                                />
                            </motion.div>
                        ))}
                        {notifications.length === 0 && (
                            <div className="text-center py-8">
                                <p className="text-xs text-muted-foreground">
                                    No notifications
                                </p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <NotionPromptForm/>
        </div>
    );
}
