import { useMantineTheme } from "@mantine/core";
import { BarChart2 } from "lucide-react";
import { useLocation } from "react-router-dom";

export const StatisticIcon = ({ activeRoutes }: { activeRoutes: string[] }) => {
    const location = useLocation();
    const theme = useMantineTheme();

    const isActive = activeRoutes.includes(location.pathname);
    return <BarChart2 color={isActive ? theme.white : theme.colors.dark[3]} />;
};
