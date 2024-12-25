import { FixedBottomBlock, GradientButton } from "@/components";
import { Letter } from "@/domains/game/components";
import { Card, Flex, Stack, Text } from "@mantine/core";
import { initHapticFeedback } from "@telegram-apps/sdk-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const RulesStep2Page = () => {
    const { t } = useTranslation();

    const hapticFeedback = initHapticFeedback();

    const navigate = useNavigate();

    const handleNextClick = () => {
        hapticFeedback.impactOccurred("medium");
        navigate("/rules-3");
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
                    <Text weight={600} size="sm">
                        {t("rules.components.lettersAndColor")}
                    </Text>
                    <Flex
                        align="center"
                        justify="center"
                        miw="fit-content"
                        mih="fit-content"
                        gap={4}
                    >
                        <Letter
                            value={t("rules.components.defaultValues00")}
                            status="NotInWord"
                            isActive={false}
                        />
                        <Letter
                            value={t("rules.components.defaultValues01")}
                            status="NotInWord"
                            isActive={false}
                        />
                        <Letter
                            value={t("rules.components.defaultValues02")}
                            status="NotInWord"
                            isActive={false}
                        />
                        <Letter
                            value={t("rules.components.defaultValues03")}
                            status="InWordAndPositionCorrect"
                            isActive={false}
                        />
                        <Letter
                            value={t("rules.components.defaultValues04")}
                            status="InWord"
                            isActive={false}
                        />
                    </Flex>
                    <Flex align="center" gap={8}>
                        <Letter
                            value={t("rules.components.defaultValues03")}
                            status="InWordAndPositionCorrect"
                            isActive={false}
                            h={48}
                            w={48}
                        />
                        <Text weight={600} size="sm" sx={{ textWrap: "wrap" }}>
                            {t("rules.components.inWordAndPositionCorrect")}
                        </Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <Letter
                            value={t("rules.components.defaultValues04")}
                            status="InWord"
                            isActive={false}
                            h={48}
                            w={48}
                        />
                        <Text weight={600} size="sm">
                            {t("rules.components.inWord")}
                        </Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <Letter
                            value={t("rules.components.defaultValues02")}
                            status="NotInWord"
                            isActive={false}
                            h={48}
                            w={48}
                        />
                        <Text weight={600} size="sm">
                            {t("rules.components.notInWord")}
                        </Text>
                    </Flex>
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
