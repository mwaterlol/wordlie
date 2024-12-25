import { useMantineTheme } from "@mantine/core";
import { CircleHelp } from "lucide-react";
import { useLocation } from "react-router-dom";

export const HowToIcon = ({ activeRoutes }: { activeRoutes: string[] }) => {
    const location = useLocation();
    const theme = useMantineTheme();

    const isActive = activeRoutes.includes(location.pathname);
    return <CircleHelp color={isActive ? theme.white : theme.colors.dark[3]} />;
};
