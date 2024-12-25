import { useMantineTheme } from "@mantine/core";
import { Settings } from "lucide-react";
import { useLocation } from "react-router-dom";

export const SettingsIcon = ({ activeRoutes }: { activeRoutes: string[] }) => {
    const location = useLocation();
    const theme = useMantineTheme();

    const isActive = activeRoutes.includes(location.pathname);

    return <Settings color={isActive ? theme.white : theme.colors.dark[3]} />;
};
