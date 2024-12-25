import { Center, Flex, Stack, Text } from "@mantine/core";
import { engKeyBoard, ruKeyBoard } from "./utils";
import { GradientButton } from "@/components";
import { useTranslation } from "react-i18next";
import { LetterStatus } from "../../types";

export const Keyboard = ({
    onKeyClick,
    letterStatuses,
    sendWord,
    disabled,
}: {
    onKeyClick: (val: string) => void;
    letterStatuses: Record<string, string>;
    sendWord: VoidFunction;
    disabled: boolean;
}) => {
    const { t, i18n } = useTranslation();

    const colors: Record<LetterStatus, string> = {
        InWord: "white",
        NotInWord: "gray.6",
        NotStarted: "white",
        InWordAndPositionCorrect: "white",
    };
    const backgrounds: Record<LetterStatus, string> = {
        InWord: "yellow",
        NotInWord: "gray.9",
        NotStarted: "dark.3",
        InWordAndPositionCorrect: "green",
    };

    const letters: string[][] = {
        ru: ruKeyBoard,
        en: engKeyBoard,
        es: [],
    }[i18n.language] as string[][];
    return (
        <Stack
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                borderRadius: "20px 20px 0 0",
                borderTop: "1px solid green",
            }}
            pt={10}
            px={10}
            pb={30}
            spacing={8}
            bg="dark.9"
            miw="100%"
            maw="100%"
        >
            {letters.map((row, index) => (
                <Flex key={index} align="center" gap={6}>
                    {row.map((letter) => (
                        <Center
                            h={40}
                            key={letter}
                            sx={{
                                flexGrow: 1,
                                borderRadius: 4,
                                cursor:
                                    (letterStatuses[letter] as LetterStatus) !==
                                    "NotInWord"
                                        ? "pointer"
                                        : "default",
                                border: "none",
                            }}
                            bg={
                                backgrounds[
                                    letterStatuses[letter] as LetterStatus
                                ]
                            }
                            w={`calc(${1 / row.length}%)`}
                            onClick={() => onKeyClick(letter)}
                            component="button"
                            disabled={
                                (letterStatuses[letter] as LetterStatus) ===
                                    "NotInWord" ||
                                (!disabled && letter !== "⌫")
                            }
                        >
                            <Text
                                c={
                                    colors[
                                        letterStatuses[letter] as LetterStatus
                                    ]
                                }
                            >
                                {letter}
                            </Text>
                        </Center>
                    ))}
                </Flex>
            ))}
            <GradientButton mt={10} disabled={disabled} onClick={sendWord}>
                {t("game.components.submit")}
            </GradientButton>
        </Stack>
    );
};
