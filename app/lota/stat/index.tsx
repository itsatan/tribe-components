import React from "react";
import NumberFlow from "@number-flow/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bullet } from "../notifications/bullet";

interface DashboardStatProps {
    label: string;
    value: string;
    description?: string;
    icon: React.ElementType;
}

export default function DashboardStat({
    label,
    value,
    description,
    icon,
}: DashboardStatProps) {
    const Icon = icon;

    // Extract prefix, numeric value, and suffix from the value string
    const parseValue = (val: string) => {
        // Match pattern: optional prefix + number + optional suffix
        const match = val.match(/^([^\d.-]*)([+-]?\d*\.?\d+)([^\d]*)$/);

        if (match) {
            const [, prefix, numStr, suffix] = match;
            return {
                prefix: prefix || "",
                numericValue: parseFloat(numStr),
                suffix: suffix || "",
                isNumeric: !isNaN(parseFloat(numStr)),
            };
        }

        return {
            prefix: "",
            numericValue: 0,
            suffix: val,
            isNumeric: false,
        };
    };

    const { prefix, numericValue, suffix, isNumeric } = parseValue(value);

    return (
        <Card className="relative overflow-hidden">
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                    <Bullet />
                    {label}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="bg-accent flex-1 overflow-clip relative">
                <div className="flex items-center">
                    <span className="text-xl font-display">
                        {isNumeric ? (
                            <NumberFlow
                                value={numericValue}
                                prefix={prefix}
                                suffix={suffix}
                            />
                        ) : (
                            value
                        )}
                    </span>
                </div>
                {description && (
                    <div className="justify-between">
                        <p className="text-xs text-muted-foreground tracking-wide">
                            {description}
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
