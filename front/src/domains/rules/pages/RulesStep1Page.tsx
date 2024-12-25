import { FixedBottomBlock, GradientButton } from "@/components";
import { GameBoard } from "@/domains/game/components";
import { Card, Stack, Text } from "@mantine/core";
import { initHapticFeedback } from "@telegram-apps/sdk-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const RulesStep1Page = () => {
    const { t } = useTranslation();

    const hapticFeedback = initHapticFeedback();

    const navigate = useNavigate();

    const handleNextClick = () => {
        hapticFeedback.impactOccurred("medium");
        navigate("/rules-2");
    };
    return (
        <>
            <Card
                sx={(theme) => ({
                    border: `1px solid ${theme.colors.green[8]}`,
                })}
            >
                <Stack>
                    <Text size="sm" weight={600} sx={{ textAlign: "center" }}>
                        {t("rules.components.typeAndSubmit")}
                    </Text>
                    <GameBoard
                        withKeyboard={false}
                        withPointer={false}
                        defaultValues={{
                            row0: [
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                            ],
                            row1: [
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                            ],
                            row2: [
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                            ],
                            row3: [
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                            ],
                            row4: [
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                                { value: "", status: "NotStarted" },
                            ],
                        }}
                        defaultCurrentWord={{
                            item0: {
                                value: t("rules.components.defaultValues00"),
                                status: "NotStarted",
                            },
                            item1: {
                                value: t("rules.components.defaultValues01"),
                                status: "NotStarted",
                            },
                            item2: {
                                value: t("rules.components.defaultValues02"),
                                status: "NotStarted",
                            },
                            item3: {
                                value: t("rules.components.defaultValues03"),
                                status: "NotStarted",
                            },
                            item4: {
                                value: t("rules.components.defaultValues04"),
                                status: "NotStarted",
                            },
                        }}
                    />
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
