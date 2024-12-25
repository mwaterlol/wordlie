import { Header } from "@/components";
import { Stack, Title, Grid, Text, Flex } from "@mantine/core";
import { BarChart2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { StatisticCard } from "../components";
import { useUserStatisticStore } from "@/domains/user/hooks";

export const StatisticPage = () => {
    const { t } = useTranslation();
    const [
        {
            winningPercent,
            averageWordsPerTry,
            totalGamesWon,
            totalGamesPlayed,
            wordsOfTheDay,
        },
    ] = useUserStatisticStore();
    return (
        <>
            <Header
                title={t("statistic.components.title")}
                icon={<BarChart2 size={20} />}
            />
            <Grid mt={150} columns={2} pb={80}>
                <Grid.Col span={1}>
                    <StatisticCard>
                        <Stack align="center" spacing={8}>
                            <Title>{totalGamesPlayed}</Title>
                            <Text size="sm" weight={600}>
                                {t("statistic.components.gamesPlayed")}
                            </Text>
                        </Stack>
                    </StatisticCard>
                </Grid.Col>
                <Grid.Col span={1}>
                    <StatisticCard>
                        <Stack align="center" spacing={8}>
                            <Title>{totalGamesWon}</Title>
                            <Text size="sm" weight={600}>
                                {t("statistic.components.gamesWon")}
                            </Text>
                        </Stack>
                    </StatisticCard>
                </Grid.Col>
                <Grid.Col span={2}>
                    <StatisticCard>
                        <Stack align="center" spacing={8}>
                            <Title>{winningPercent}%</Title>
                            <Text size="sm" weight={600}>
                                {t("statistic.components.winPercent")}
                            </Text>
                        </Stack>
                    </StatisticCard>
                </Grid.Col>
                <Grid.Col span={2}>
                    <StatisticCard>
                        <Flex gap={8} align="center">
                            <Title>{averageWordsPerTry}</Title>
                            <Text size="sm" weight={600}>
                                {t("statistic.components.wordPerTry")}
                            </Text>
                        </Flex>
                    </StatisticCard>
                </Grid.Col>
                <Grid.Col span={2}>
                    <StatisticCard>
                        <Stack spacing={8} align="center">
                            <Title>{wordsOfTheDay.length}</Title>
                            <Text size="sm" weight={600}>
                                {t("statistic.components.wordOfTheDay")}
                            </Text>
                        </Stack>
                    </StatisticCard>
                </Grid.Col>
            </Grid>
        </>
    );
};
