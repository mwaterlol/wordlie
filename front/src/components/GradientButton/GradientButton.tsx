import {
    Button,
    ButtonProps,
    createPolymorphicComponent,
    Flex,
} from "@mantine/core";
import { forwardRef } from "react";

export const GradientButton = createPolymorphicComponent<
    "button",
    ButtonProps & { withShine?: boolean }
>(
    forwardRef<
        HTMLButtonElement,
        Omit<ButtonProps, "variant" | "gradient"> & { withShine?: boolean }
    >((props, ref) => (
        <Button
            ref={ref}
            w={"100%"}
            h={53}
            sx={() => ({
                ".mantine-Button-label": { overflow: "visible" },
                background:
                    "linear-gradient(90deg, #40c057 0%, #40c057 33%, #fab005 95.21%)",
                borderRadius: "16px",
                position: "relative",
                opacity: props.disabled ? 0.5 : 1,
                boxShadow:
                    !props.loading && !props.disabled
                        ? `
          0px 0px 32px 0px #40c057,
          0px 0px 24px 0px #40c057,
          0px 0px 16px 0px #fab005
        `
                        : undefined,
                fontSize: 18,
                fontWeight: 700,
                minWidth: "100%",
                transition: "all 300ms",
            })}
            {...props}
        />
    ))
);

export const GradientOutlineButton = createPolymorphicComponent<
    "button",
    ButtonProps
>(
    forwardRef<
        HTMLButtonElement,
        Omit<ButtonProps, "variant" | "gradient"> & { withShine?: boolean }
    >(({ children, ...props }, ref) => (
        <Button
            ref={ref}
            w={"100%"}
            h={53}
            sx={() => ({
                background: "transparent",
                borderRadius: "16px",
                position: "relative",
                border: "none",
                opacity: props.disabled ? 0.5 : 1,
                fontSize: 18,
                fontWeight: 700,
                minWidth: "100%",
                overflow: "visible",
                "&:hover": {
                    "& .mantine-Button-inner": { background: "#111112" },
                },
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    borderRadius: 16,
                    padding: "1px",
                    background:
                        "linear-gradient(90deg, #6741D9 0%, #6741D9 33%, #487DE8 95.21%) !important",

                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "destination-out",
                },
                "& .mantine-Button-inner": {
                    minWidth: "calc(100% - 2px)",
                    minHeight: "calc(100% - 2px)",
                    maxHeight: "calc(100% - 2px)",
                    background: "inherit",
                    borderRadius: 16,
                    margin: 1,
                },
                "& .mantine-Button-label": {
                    minWidth: "100%",
                    backgroundClip: "text",
                },
            })}
            p={0}
            {...props}
        >
            <Flex
                bg="inherit"
                miw="100%"
                mih="100%"
                sx={{ borderRadius: "16px" }}
                justify="center"
                align="center"
            >
                {children}
            </Flex>
        </Button>
    ))
);
