import {
    Card,
    DefaultMantineColor,
    Flex,
    Progress,
    Stack,
    SystemProp,
    Title,
} from "@mantine/core";
import { initHapticFeedback } from "@telegram-apps/sdk-react";
import { PlayCircleIcon } from "lucide-react";
import { ReactNode } from "react";

export const ActionCard = ({
    radius = "16px",
    title,
    color,
    description,
    progressColor,
    progressLabel,
    children,
    onClick,
}: {
    radius?: string;
    title: string;
    description: string;
    color: SystemProp<DefaultMantineColor>;
    progressColor?: DefaultMantineColor;
    progressLabel?: string;
    children?: ReactNode;
    onClick?: VoidFunction;
}) => {
    const hapticFeedback = initHapticFeedback();
    return (
        <Card
            bg={color ?? "violet.7"}
            sx={{
                border: `0.0625rem solid ${"#373A40"} !important`,
                borderRadius: `${radius} !important`,
                cursor: "pointer",
            }}
            miw="100%"
            component={"button"}
            onClick={() => {
                if (onClick) {
                    hapticFeedback.impactOccurred("medium");
                    onClick();
                }
            }}
            p={10}
        >
            <Flex gap={10} align="center" justify="space-between">
                <Stack spacing={4}>
                    <Title
                        order={4}
                        sx={{ textAlign: "left", whiteSpace: "nowrap" }}
                    >
                        {title}
                    </Title>
                    <Title order={6} weight={500} sx={{ textAlign: "start" }}>
                        {description}
                    </Title>
                </Stack>
                <PlayCircleIcon size={24} style={{ minWidth: 24 }} />
            </Flex>
            {progressColor && progressLabel && (
                <Progress
                    value={0}
                    mt={4}
                    color={progressColor}
                    h={26}
                    radius={"xl"}
                    label={progressLabel}
                    sx={{
                        ".mantine-Progress-label": {
                            fontSize: 10,
                            position: "absolute",
                            left: 10,
                        },
                    }}
                    miw="100%"
                />
            )}
            {children}
        </Card>
    );
};
