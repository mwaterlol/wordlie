import { Card, Drawer, Flex, Stack, Text, Title } from "@mantine/core";
import { Letter } from "../Letter/Letter";
import { useDisclosure, useSetState } from "@mantine/hooks";
import {
    checkLetter,
    convertSingleToArray,
    convertSingleToObject,
    convertToArray,
    convertToObject,
    createDefaultCurrentValue,
    createDefaultValues,
} from "./utils";
import { Keyboard } from "../Keyboard/Keyboard";
import { LetterStatus } from "../../types";
import { initHapticFeedback } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";
import { useBackButton } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { GameBoardProps } from "./types";
import { useTranslation } from "react-i18next";
import { GradientButton } from "@/components";

export const GameBoard = ({
    lettersAmount = 5,
    withKeyboard = true,
    defaultValues,
    withPointer = true,
    defaultCurrentWord,
    targetWord = "",
    onSuccess,
    onFail,
}: GameBoardProps) => {
    const { show, onBackButtonClick } = useBackButton();

    const { t } = useTranslation();
    const [isSuccess, setIsSuccess] = useState(true);
    const [opened, { toggle }] = useDisclosure();
    const navigate = useNavigate();
    const [values, setValues] = useSetState(
        defaultValues ?? convertToObject(createDefaultValues(lettersAmount))
    );
    const [position, setPosition] = useSetState({ word: 0, letter: 0 });
    const [currentWord, setCurrentWord] = useSetState(
        defaultCurrentWord ??
            convertSingleToObject(createDefaultCurrentValue(lettersAmount))
    );

    const [ableToSend, setIsAbleToSend] = useState(false);
    const [letterStatuses, setLetterStatuses] = useSetState<
        Record<string, LetterStatus>
    >({});

    const hapticFeedback = initHapticFeedback();

    const checkWord = (
        target: string,
        current: { value: string; status: LetterStatus }[],
        wordIndex: number
    ) => {
        const checkedWord = current.map((elem, index) => ({
            value: elem.value,
            status: checkLetter(targetWord, elem.value, index),
        }));

        const updatedStatuses = { ...letterStatuses };
        checkedWord.forEach(({ value, status }) => {
            if (
                updatedStatuses[value] === undefined ||
                status === "InWordAndPositionCorrect" ||
                (status === "InWord" && updatedStatuses[value] === "NotInWord")
            ) {
                updatedStatuses[value] = status;
            }
        });
        setLetterStatuses(updatedStatuses);

        setValues((prev) => ({
            ...prev,
            [`row${wordIndex}`]: checkedWord,
        }));

        if (target === checkedWord.map((elem) => elem.value).join("")) {
            setIsSuccess(true);
            onSuccess?.(
                convertToArray(values).filter((val) => val[0].value !== "")
                    .length + 1
            );
            toggle();
        }
        if (
            target !== checkedWord.map((elem) => elem.value).join("") &&
            position.word === 4
        ) {
            setIsSuccess(false);
            onFail?.();
            toggle();
        }
        setIsAbleToSend(false);
        setCurrentWord(
            convertSingleToObject(createDefaultCurrentValue(lettersAmount))
        );
        setPosition((prev) => ({ word: prev.word + 1, letter: 0 }));
    };
    const onKeyClick = (letter: string) => {
        if (letter === "⌫") {
            setIsAbleToSend(false);
            if (position.letter > 0) {
                setPosition((prev) => ({
                    ...prev,
                    letter: prev.letter - 1,
                }));

                setCurrentWord((prev) => ({
                    ...prev,
                    [`item${position.letter - 1}`]: {
                        value: "",
                        status: "NotStarted",
                    },
                }));
            }
            return;
        }

        if (position.letter === lettersAmount) {
            hapticFeedback.notificationOccurred("error");
            return;
        }

        const updatedCurrentWord = {
            ...currentWord,
            [`item${position.letter}`]: {
                status: "NotStarted",
                value: letter,
            },
        } as {
            [x: string]: {
                value: string;
                status: LetterStatus;
            };
        };

        setCurrentWord(updatedCurrentWord);

        if (position.letter === lettersAmount - 1) {
            setIsAbleToSend(true);
        } else {
            setPosition((prev) => ({ letter: prev.letter + 1 }));
        }
    };

    const sendWord = () => {
        checkWord(targetWord, convertSingleToArray(currentWord), position.word);
    };

    useEffect(() => {
        show();
        onBackButtonClick(() => navigate("/"));
    }, []);

    return (
        <Stack>
            <Stack spacing={4} maw={450}>
                {convertToArray(values).map((row, index) => (
                    <Flex
                        key={index + row[0].value + row[1].value}
                        align="center"
                        justify="center"
                        miw="fit-content"
                        mih="fit-content"
                        gap={4}
                    >
                        {(index === position.word
                            ? convertSingleToArray(currentWord)
                            : row
                        ).map((letter, letterIndex) => (
                            <Letter
                                {...letter}
                                key={letterIndex}
                                isActive={
                                    index === position.word &&
                                    letterIndex === position.letter &&
                                    withPointer
                                }
                            />
                        ))}
                    </Flex>
                ))}
            </Stack>
            {withKeyboard && (
                <Keyboard
                    onKeyClick={onKeyClick}
                    letterStatuses={letterStatuses}
                    key={JSON.stringify(letterStatuses)}
                    sendWord={sendWord}
                    disabled={!ableToSend}
                />
            )}
            <Drawer
                opened={opened}
                onClose={() => navigate("/")}
                size={320}
                position="bottom"
                sx={(theme) => ({
                    ".mantine-Paper-root": {
                        borderRadius: "16px 16px 0 0",
                        borderTop: `1px solid ${theme.colors.green[8]}`,
                    },
                })}
                title={
                    <Title order={3}>
                        {isSuccess
                            ? t("game.components.guessed")
                            : t("game.components.notGuessed")}
                    </Title>
                }
            >
                <Stack align="center">
                    <Card
                        withBorder
                        radius={"16px !important"}
                        maw="fit-content"
                    >
                        <Flex align="center" gap={16} justify="center">
                            <Text weight={600}>
                                {t("game.components.word")}:
                            </Text>
                            <Text
                                weight={700}
                                size="xl"
                                c={isSuccess ? "green.8" : "red.8"}
                            >
                                {targetWord}
                            </Text>
                        </Flex>
                    </Card>
                    <GradientButton mt={40}>
                        {t("game.components.playMore")}
                    </GradientButton>
                </Stack>
            </Drawer>
        </Stack>
    );
};
