import { Navigation } from "@/components";
import { Box, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { useScrollToTopOnPageChange } from "@/hooks";

export const MainLayout = () => {
    useScrollToTopOnPageChange();

    return (
        <Stack>
            <Box
                sx={{
                    backgroundBlendMode: "lighten",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                    position: "fixed",
                    transform: "translateZ(0)",
                    "-webkit-transform": "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                    left: 0,
                    top: 0,
                    right: 0,
                    zIndex: 1,
                    height: "100%",
                    minWidth: "100%",
                }}
            />
            <Stack
                p={16}
                sx={{
                    zIndex: 2,
                    minHeight: "fit-content",
                }}
            >
                <Outlet />
            </Stack>
            <Navigation />
        </Stack>
    );
};
