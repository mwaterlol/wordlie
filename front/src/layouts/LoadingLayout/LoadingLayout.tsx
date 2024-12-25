import {
    Box,
    Center,
    keyframes,
    Stack,
    Title,
    useMantineTheme,
    Text,
} from "@mantine/core";
import BG from "@/assets/BG.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ErrorAlert } from "@/components";
import { Frown } from "lucide-react";
import Avatar from "@/assets/avatar.svg?react";
import AvatarBorder from "@/assets/loadingAvatarBorder.svg?react";
import { useDimensions } from "@/hooks";

const rotate = keyframes({
    "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
    "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
});
export const LoadingLayout = ({ isError }: { isError: boolean }) => {
    const { t } = useTranslation();

    const [counter, setCounter] = useState(30);

    const theme = useMantineTheme();
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer as any);
    }, [counter]);

    const [, windowHeight] = useDimensions();

    return (
        <Center
            sx={{
                minHeight: windowHeight,
                height: windowHeight,
            }}
        >
            <Box
                sx={{
                    minHeight: windowHeight,
                    background: `url(${BG})`,
                    backgroundBlendMode: "lighten",
                    backgroundSize: "cover",
                    backgroundColor: "#111112",
                    opacity: 0.5,
                    position: "absolute",
                    zIndex: 1,
                }}
                miw="100vw"
            />

            <Stack justify="center" align="center" sx={{ zIndex: 3 }}>
                {!(counter <= 0 || isError) ? (
                    <>
                        <Box w={200} h={191} pos="relative">
                            <Avatar
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 5,
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    animation: `${rotate} 4s linear infinite`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                w={200}
                                h={200}
                            >
                                <AvatarBorder />
                            </Box>
                        </Box>
                    </>
                ) : (
                    <>
                        <ErrorAlert maw={260}>
                            <Stack align="center">
                                <Frown
                                    size={70}
                                    color={theme.colors.dark[1]}
                                    strokeWidth={1.2}
                                />
                                <Text color={theme.colors.dark[1]}>
                                    {" "}
                                    {t("loading.error")}
                                </Text>
                            </Stack>
                        </ErrorAlert>
                    </>
                )}
                <Title order={3}>{t("loading.title")}</Title>
            </Stack>
        </Center>
    );
};
