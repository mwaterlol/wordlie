import { Avatar, Card, Divider, Flex, Stack, Text, Title } from "@mantine/core";
import { ActionCard } from "../components";
import { Header } from "@/components";
import { useTranslation } from "react-i18next";
import { LEVELS_AMOUNT } from "@/consts";
import { CirclePlay, LoaderCircle, LockKeyhole } from "lucide-react";
import { useGetArcadeStats } from "../hooks";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const {
        totalFiveWords,
        totalSixWords,
        totalSevenWords,
        totalEightWords,
        totalNineWords,
    } = useGetArcadeStats();
    const steps = [
        { value: 5, total: totalFiveWords, guessed: 0 },
        { value: 6, total: totalSixWords, guessed: 0 },
        { value: 7, total: totalSevenWords, guessed: 0 },
        { value: 8, total: totalEightWords, guessed: 0 },
        { value: 9, total: totalNineWords, guessed: 0 },
    ];
    return (
        <Stack mb={100} pt={150}>
            <Header
                title={t("mainPage.components.title")}
                icon={
                    <Avatar
                        variant="filled"
                        size={30}
                        color="green.8"
                        radius="xl"
                    >
                        <Title order={3}>
                            {t("mainPage.components.title").slice(0, 1)}
                        </Title>
                    </Avatar>
                }
            />
            <ActionCard
                title={t("mainPage.components.wordOfTheDay.title")}
                color={"blue.6"}
                description={t("mainPage.components.wordOfTheDay.description")}
                onClick={() => {
                    navigate("/game?type=day");
                }}
            />
            <ActionCard
                title={t("mainPage.components.arcade.title")}
                color={"violet.4"}
                description={t("mainPage.components.arcade.description")}
                progressColor={"violet.6"}
                progressLabel={`${t("mainPage.components.progress", { count: 1 })}/${LEVELS_AMOUNT}`}
            >
                <Stack mt={0}>
                    <Flex align="center" justify="center" gap={6}>
                        <Text component={LoaderCircle} />
                        <Title order={3} my={10}>
                            {t("mainPage.components.progressTitle")}
                        </Title>
                    </Flex>
                    {steps.map(({ value, total, guessed }, index) => (
                        <>
                            {index !== 0 && (
                                <Divider
                                    orientation="horizontal"
                                    mt={10}
                                    color="white"
                                />
                            )}
                            <Flex
                                align="center"
                                justify="space-between"
                                gap={12}
                            >
                                <Stack spacing={0}>
                                    <Text weight={700} size={30}>
                                        {value}
                                    </Text>
                                    <Text weight={700} size={"sm"}>
                                        {t("mainPage.components.letters")}
                                    </Text>
                                </Stack>
                                <Stack spacing={8} sx={{ flexGrow: 1 }}>
                                    <Card
                                        p={10}
                                        bg="violet.8"
                                        sx={{ flexGrow: 1 }}
                                    >
                                        <Flex
                                            align="center"
                                            justify="space-between"
                                        >
                                            <Stack align="start" spacing={0}>
                                                <Text size="sm" weight={600}>
                                                    {t(
                                                        "mainPage.components.regular"
                                                    )}
                                                </Text>
                                                <Text size="xs">
                                                    {t(
                                                        "mainPage.components.total"
                                                    )}{" "}
                                                    {guessed}/{total}
                                                </Text>
                                            </Stack>
                                            <CirclePlay />
                                        </Flex>
                                    </Card>
                                    <Card bg="violet.5" p={10}>
                                        <Flex
                                            align="center"
                                            justify="space-between"
                                        >
                                            <Stack align="start" spacing={0}>
                                                <Text size="sm" weight={600}>
                                                    {t(
                                                        "mainPage.components.hard"
                                                    )}
                                                </Text>
                                                <Text size="xs">
                                                    {t(
                                                        "mainPage.components.wordsWith",
                                                        { count: 5 }
                                                    )}
                                                </Text>
                                            </Stack>
                                            <LockKeyhole />
                                        </Flex>
                                    </Card>
                                </Stack>
                            </Flex>
                        </>
                    ))}
                </Stack>
            </ActionCard>
        </Stack>
    );
};
