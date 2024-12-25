import { Box, Flex, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "../Link";
import { initHapticFeedback } from "@telegram-apps/sdk-react";
import { HouseIcon, StatisticIcon, HowToIcon, SettingsIcon } from "./icons";
import { useNavigationStore } from "@/hooks";
import { rulesRoutes } from "@/domains/rules/routes";

export const Navigation = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const hapticFeedback = initHapticFeedback();

    const { state } = useNavigationStore();
    const activeRoutes = {
        mainPage: ["/"],
        rules: rulesRoutes.map((route) => route.path),
        statistics: ["/statistics"],
    };
    const menuItems: {
        label: string;
        icon: JSX.Element;
        to: string;
        activeRoutes: string[];
    }[] = [
        {
            label: t("common.menu.home"),
            icon: <HouseIcon activeRoutes={activeRoutes.mainPage} />,
            to: "/",

            activeRoutes: ["/"],
        },
        {
            label: t("common.menu.howToPlay"),
            icon: <HowToIcon activeRoutes={activeRoutes.rules} />,
            to: "/rules-1",
            activeRoutes: activeRoutes.rules,
        },
        {
            label: t("common.menu.statistic"),
            icon: <StatisticIcon activeRoutes={activeRoutes.statistics} />,
            to: "/statistics",
            activeRoutes: activeRoutes.statistics,
        },
        {
            label: t("common.menu.settings"),
            icon: <SettingsIcon activeRoutes={[]} />,
            to: "/tarot",
            activeRoutes: [],
        },
    ];
    return (
        <>
            <Flex
                sx={{
                    position: "fixed",
                    bottom: 0,
                    zIndex: 200,
                    transform: "translateZ(2)",
                    "-webkit-transform": "translateZ(2)",
                    WebkitTransform: "translateZ(2)",
                    transition: "all 300ms",
                    opacity: state.shown ? 1 : 0,
                    display: state.shown ? undefined : "none",
                }}
                miw="100vw"
                pb={22}
                gap={0}
                bg="dark.9"
            >
                {menuItems.map((item) => {
                    const isActive =
                        item.activeRoutes.includes(location.pathname) ||
                        (item.activeRoutes[0] === "/" &&
                            location.pathname === "/");
                    return (
                        <Stack
                            w="25%"
                            align="center"
                            h={65}
                            sx={{ overflowX: "hidden" }}
                        >
                            <Link
                                to={item.to}
                                key={item.to}
                                onClick={() => {
                                    hapticFeedback.impactOccurred("soft");
                                }}
                                style={{ minWidth: "100%" }}
                            >
                                <Stack
                                    spacing={4}
                                    align="center"
                                    miw="100%"
                                    sx={(theme) => ({
                                        color: isActive
                                            ? "white"
                                            : theme.colors.dark[3],
                                        fill: isActive
                                            ? "white"
                                            : theme.colors.dark[3],
                                        margin: 0,
                                    })}
                                >
                                    <Box
                                        sx={(theme) => ({
                                            background: isActive
                                                ? theme.colors.green[8]
                                                : "transparent",
                                            boxShadow: isActive
                                                ? "0px 0px 50px 0px #2f9e44, 0px 0px 24px 0px #2f9e44, 0px 0px 16px 0px #2f9e44"
                                                : undefined,

                                            width: "100%",
                                            height: 4,
                                        })}
                                        mb={7}
                                    />

                                    <Box
                                        w={24}
                                        h={24}
                                        sx={{ position: "relative" }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Text size="xs" weight={600}>
                                        {item.label}
                                    </Text>
                                </Stack>
                            </Link>
                        </Stack>
                    );
                })}
            </Flex>
        </>
    );
};
