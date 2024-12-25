import { FixedBottomBlock, GradientButton } from "@/components";
import { GameBoard } from "@/domains/game/components";
import { Card, Stack, Text } from "@mantine/core";
import { initHapticFeedback } from "@telegram-apps/sdk-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const RulesStep3Page = () => {
    const { t } = useTranslation();

    const hapticFeedback = initHapticFeedback();

    const navigate = useNavigate();

    const handleNextClick = () => {
        hapticFeedback.impactOccurred("medium");
        navigate("/rules-4");
    };

    return (
        <>
            <Card
                sx={(theme) => ({
                    border: `1px solid ${theme.colors.green[8]}`,
                })}
                miw="100%"
            >
                <Stack>
                    <Text size="sm" weight={600} sx={{ textAlign: "center" }}>
                        {t("rules.components.typeToGuess")}
                    </Text>
                    <GameBoard
                        withKeyboard={false}
                        withPointer={false}
                        defaultValues={{
                            row0: [
                                {
                                    value: t(
                                        "rules.components.defaultValues00"
                                    ),
                                    status: "InWord",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues01"
                                    ),
                                    status: "InWordAndPositionCorrect",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues02"
                                    ),
                                    status: "NotInWord",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues03"
                                    ),
                                    status: "InWordAndPositionCorrect",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues04"
                                    ),
                                    status: "NotInWord",
                                },
                            ],
                            row1: [
                                {
                                    value: t(
                                        "rules.components.defaultValues10"
                                    ),
                                    status: "InWord",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues11"
                                    ),
                                    status: "NotInWord",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues12"
                                    ),
                                    status: "NotInWord",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues13"
                                    ),
                                    status: "NotInWord",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues14"
                                    ),
                                    status: "NotInWord",
                                },
                            ],
                            row2: [
                                {
                                    value: t(
                                        "rules.components.defaultValues20"
                                    ),
                                    status: "InWordAndPositionCorrect",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues21"
                                    ),
                                    status: "InWordAndPositionCorrect",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues22"
                                    ),
                                    status: "InWordAndPositionCorrect",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues23"
                                    ),
                                    status: "InWordAndPositionCorrect",
                                },
                                {
                                    value: t(
                                        "rules.components.defaultValues24"
                                    ),
                                    status: "InWordAndPositionCorrect",
                                },
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
                                status: "InWord",
                            },
                            item1: {
                                value: t("rules.components.defaultValues01"),
                                status: "InWordAndPositionCorrect",
                            },
                            item2: {
                                value: t("rules.components.defaultValues02"),
                                status: "NotInWord",
                            },
                            item3: {
                                value: t("rules.components.defaultValues03"),
                                status: "InWordAndPositionCorrect",
                            },
                            item4: {
                                value: t("rules.components.defaultValues04"),
                                status: "NotInWord",
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
