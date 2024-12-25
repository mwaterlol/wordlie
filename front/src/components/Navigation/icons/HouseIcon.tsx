import { useMantineTheme } from "@mantine/core";
import { House } from "lucide-react";
import { useLocation } from "react-router-dom";

export const HouseIcon = ({ activeRoutes }: { activeRoutes: string[] }) => {
    const location = useLocation();
    const theme = useMantineTheme();

    const isActive = activeRoutes.includes(location.pathname);

    return <House color={isActive ? theme.white : theme.colors.dark[3]} />;
};
