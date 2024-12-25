import { AspectRatio, Text } from "@mantine/core";
import { LetterStatus } from "../../types";

export const Letter = ({
    status,
    value,
    isActive,
    h,
    w,
}: {
    status: LetterStatus;
    value: string;
    isActive: boolean;
    h?: number;
    w?: number;
}) => {
    const colors: Record<LetterStatus, string> = {
        InWord: "white",
        NotInWord: "dark.8",
        NotStarted: "white",
        InWordAndPositionCorrect: "white",
    };
    const backgrounds: Record<LetterStatus, string> = {
        InWord: "yellow",
        NotInWord: "gray.8",
        NotStarted: "gray.7",
        InWordAndPositionCorrect: "green",
    };
    return (
        <AspectRatio
            ratio={1}
            bg={backgrounds[status]}
            sx={{
                flexGrow: 1,
                boxShadow: isActive ? "inset 0px 0px 0px 1px white" : "none",
                borderRadius: 4,
            }}
            h={h}
            maw={w}
            miw={w}
        >
            <Text weight={700} c={colors[status]} size={34}>
                {value}
            </Text>
        </AspectRatio>
    );
};
