import { FixedBottomBlock, GradientButton } from "@/components";
import { Button, Card, Flex, Stack, Text } from "@mantine/core";
import { initHapticFeedback } from "@telegram-apps/sdk-react";
import { ArrowBigUpDash, BarChart2, Coins } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const RulesStep4Page = () => {
    const { t } = useTranslation();

    const hapticFeedback = initHapticFeedback();

    const navigate = useNavigate();

    const handleNextClick = () => {
        hapticFeedback.impactOccurred("medium");
        navigate("/");
    };
    return (
        <>
            <Card
                sx={(theme) => ({
                    border: `1px solid ${theme.colors.green[8]}`,
                })}
                miw="100%"
            >
                <Stack align="center">
                    <Text size="sm" weight={600} sx={{ textAlign: "center" }}>
                        {t("rules.components.theMoreYouPlay")}
                    </Text>
                    <Flex align="center">
                        <ArrowBigUpDash size={40} />
                        <Coins size={30} />
                    </Flex>
                    <Button miw="100%" rightIcon={<BarChart2 />}>
                        {t("rules.components.toStatistics")}
                    </Button>
                </Stack>
            </Card>
            <FixedBottomBlock>
                <GradientButton onClick={handleNextClick}>
                    {t("rules.components.next")}
                </GradientButton>
            </FixedBottomBlock>
        </>
    );
};
