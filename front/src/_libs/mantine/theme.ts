import { getSize, MantineThemeOverride, rem } from "@mantine/core";
// import BG from '@/assets/BG.png'

const InputSizes = {
    xs: rem(36),
    sm: rem(42),
    md: rem(44),
    lg: rem(50),
    xl: rem(60),
};

export const theme: MantineThemeOverride = {
    colorScheme: "dark",
    colors: {
        biedge: ["#ED9E6F"],
    },

    primaryColor: "green",
    black: "#000",
    white: "#fff",
    cursorType: "pointer",

    breakpoints: {
        "2xl": "96em",
    },

    primaryShade: 6,

    fontFamily: "Open Sans, sans-serif",

    fontSizes: {
        xxs: "0.65rem",
    },

    spacing: {
        xxl: rem(40),
        xl: rem(28),
    },

    globalStyles: (theme) => ({
        body: {
            color: theme.white,
            overflow: "hidden",
            height: "100vh",
            a: { color: theme.colors.gray[3], textDecoration: "none" },
        },
    }),

    components: {
        Title: {},
        Text: {},
        Select: {
            styles: (theme) => ({
                input: {
                    backgroundColor: "transparent",
                    borderRadius: 16,
                    color: theme.colors.gray[6],
                    fontSize: 14,
                    borderColor: theme.colors.gray[6],
                    paddingLeft: 12,
                    height: 36,
                },
                dropdown: { borderRadius: 16 },
                label: {
                    color: theme.white,
                },
            }),
        },
        Card: {
            styles: (theme) => ({
                root: {
                    color: "white",
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.white,
                    borderRadius: 16,
                },
            }),
        },
        Popover: {
            styles: (theme) => ({
                dropdown: {
                    boxShadow:
                        theme.colorScheme === "dark"
                            ? "0px 8px 20px rgba(0, 0, 0, 0.7)"
                            : "0px 8px 20px rgba(255, 255, 255, 0.5)",
                },
            }),
        },
        Input: {
            defaultProps: {
                radius: "lg",
                size: "sm",
            },
            styles: (theme, _, { size }) => {
                const _size = getSize({
                    size: size ?? "sm",
                    sizes: InputSizes,
                });

                return {
                    input: {
                        minHeight: _size,
                        paddingLeft: rem(14),
                        paddingRight: rem(14),
                        background: "transparent",
                        borderColor: theme.colors.gray[6],
                        color: theme.white,
                    },
                    label: {
                        color: theme.white,
                    },
                };
            },
        },
        TimeInput: {
            styles: (theme, _, { size }) => {
                const _size = getSize({
                    size: size ?? "sm",
                    sizes: InputSizes,
                });

                return {
                    input: {
                        minHeight: _size,
                        paddingLeft: rem(14),
                        paddingRight: rem(14),
                        background: "transparent",
                        borderColor: theme.colors.gray[6],
                        color: theme.white,
                    },
                    label: {
                        color: theme.white,
                        marginBottom: 4,
                    },
                };
            },
        },
        // Alert: {
        //   styles: (theme, params, { variant }) => {
        //     return {
        //       root: {
        //         boxShadow: `0px 4px 10px ${theme.fn.darken(theme.colors[params.color][7], 0.2)}`,
        //       },
        //       message: {
        //         color:
        //           variant === 'outline' ? theme.colors[params.color][5] : undefined,
        //       },
        //     }
        //   },
        // },
        Button: {
            styles: (theme, _, { variant }) => ({
                root: {
                    color: variant === "white" ? theme.colors.gray[5] : "white",
                    borderWidth: variant === "outline" ? 1 : 0,
                    borderColor: theme.colors.violet[8],
                    borderRadius: 12,
                    background: variant === "white" ? "transparent" : undefined,
                    "&[data-disabled]": {
                        background: theme.fn.rgba(theme.colors.green[8], 0.8),
                        color: theme.colors.gray[4],
                    },
                },
            }),
        },
    },
};
