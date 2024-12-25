import { Box } from "@mantine/core";
import { ReactNode } from "react";

export const FixedBottomBlock = ({
    children,
    isVisible = true,
}: {
    children: ReactNode;
    isVisible?: boolean;
}) => {
    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 86,
                borderRadius: 0,
                zIndex: 7,
                padding: 0,
                width: `100vw`,
                left: "50%",
                display: "flex",
                alignItems: "center",
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: isVisible ? 16 : 0,
                transform: "translate(-50%,0)",
                background:
                    "linear-gradient(180deg, rgba(26, 27, 30, 0.00) 0%, rgba(26, 27, 30, 0.60) 43.2%, rgba(26, 27, 30, 0.95) 100%)",
                transition: "all 300ms",
                opacity: isVisible ? 1 : 0,
                maxHeight: isVisible ? undefined : 0,
            }}
        >
            {children}
        </Box>
    );
};
