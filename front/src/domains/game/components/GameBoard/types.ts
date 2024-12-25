import { LetterStatus } from "../../types";

export type GameBoardProps = {
    lettersAmount?: number;
    withKeyboard?: boolean;
    defaultValues?: Record<
        string,
        {
            value: string;
            status: LetterStatus;
        }[]
    >;
    defaultCurrentWord?: Record<
        string,
        {
            value: string;
            status: LetterStatus;
        }
    >;
    withPointer?: boolean;
    targetWord?: string;
    onSuccess?: (tries: number) => void;
    onFail?: VoidFunction;
};
