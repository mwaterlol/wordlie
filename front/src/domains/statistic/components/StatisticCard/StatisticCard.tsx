import { Card } from "@mantine/core";
import { ReactNode } from "react";

export const StatisticCard = ({ children }: { children: ReactNode }) => {
    return (
        <Card bg="green.8" withBorder>
            {children}
        </Card>
    );
};
