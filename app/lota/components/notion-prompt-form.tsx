"use client"

import { useState } from "react"
import {
    IconArrowUp,
    IconPaperclip,
} from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldLabel } from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const SAMPLE_DATA = {
    mentionable: [
        {
            type: "page",
            title: "Meeting Notes",
            image: "📝",
        },
        {
            type: "page",
            title: "Project Dashboard",
            image: "📊",
        },
        {
            type: "page",
            title: "Ideas & Brainstorming",
            image: "💡",
        },
        {
            type: "page",
            title: "Calendar & Events",
            image: "📅",
        },
        {
            type: "page",
            title: "Documentation",
            image: "📚",
        },
        {
            type: "page",
            title: "Goals & Objectives",
            image: "🎯",
        },
        {
            type: "page",
            title: "Budget Planning",
            image: "💰",
        },
        {
            type: "page",
            title: "Team Directory",
            image: "👥",
        },
        {
            type: "page",
            title: "Technical Specs",
            image: "🔧",
        },
        {
            type: "page",
            title: "Analytics Report",
            image: "📈",
        },
        {
            type: "user",
            title: "shadcn",
            image: "https://github.com/shadcn.png",
            workspace: "Workspace",
        },
        {
            type: "user",
            title: "maxleiter",
            image: "https://github.com/maxleiter.png",
            workspace: "Workspace",
        },
        {
            type: "user",
            title: "evilrabbit",
            image: "https://github.com/evilrabbit.png",
            workspace: "Workspace",
        },
    ],
    models: [
        {
            name: "Auto",
        },
        {
            name: "Agent Mode",
            badge: "Beta",
        },
        {
            name: "Plan Mode",
        },
    ],
}

export function NotionPromptForm() {
    const [modelPopoverOpen, setModelPopoverOpen] = useState(false)
    const [selectedModel, setSelectedModel] = useState<
        (typeof SAMPLE_DATA.models)[0]
    >(SAMPLE_DATA.models[0])
    return (
        <form>
            <Field>
                <FieldLabel htmlFor="notion-prompt" className="sr-only">
                    Prompt
                </FieldLabel>
                <InputGroup>
                    <InputGroupTextarea
                        id="notion-prompt"
                        placeholder="Ask, search, or make anything..."
                    />
                    <InputGroupAddon align="block-end" className="gap-1">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <InputGroupButton
                                    size="icon-sm"
                                    className="rounded-full"
                                    aria-label="Attach file"
                                >
                                    <IconPaperclip />
                                </InputGroupButton>
                            </TooltipTrigger>
                            <TooltipContent>Attach file</TooltipContent>
                        </Tooltip>
                        <DropdownMenu
                            open={modelPopoverOpen}
                            onOpenChange={setModelPopoverOpen}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <DropdownMenuTrigger asChild>
                                        <InputGroupButton size="sm" className="rounded-full">
                                            {selectedModel.name}
                                        </InputGroupButton>
                                    </DropdownMenuTrigger>
                                </TooltipTrigger>
                                <TooltipContent>Select AI model</TooltipContent>
                            </Tooltip>
                            <DropdownMenuContent
                                side="top"
                                align="start"
                                className="[--radius:1rem]"
                            >
                                <DropdownMenuGroup className="w-42">
                                    <DropdownMenuLabel className="text-muted-foreground text-xs">
                                        Select Agent Mode
                                    </DropdownMenuLabel>
                                    {SAMPLE_DATA.models.map((model) => (
                                        <DropdownMenuCheckboxItem
                                            key={model.name}
                                            checked={model.name === selectedModel.name}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setSelectedModel(model)
                                                }
                                            }}
                                            className="pl-2 *:[span:first-child]:right-2 *:[span:first-child]:left-auto"
                                        >
                                            {model.name}
                                            {model.badge && (
                                                <Badge
                                                    variant="secondary"
                                                    className="h-5 rounded-sm bg-blue-100 px-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                                >
                                                    {model.badge}
                                                </Badge>
                                            )}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <InputGroupButton
                            aria-label="Send"
                            className="ml-auto rounded-sm"
                            variant="default"
                            size="icon-sm"
                        >
                            <IconArrowUp />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </Field>
        </form>
    )
}
