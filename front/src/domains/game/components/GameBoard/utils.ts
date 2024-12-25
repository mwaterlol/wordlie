import { LetterStatus } from "../../types";

export const createDefaultValues = (
    columns: number
): { value: string; status: LetterStatus }[][] => {
    return Array.from({ length: 5 }, () =>
        Array.from({ length: columns }, () => ({
            value: "",
            status: "NotStarted" as LetterStatus,
        }))
    );
};
export const createDefaultCurrentValue = (
    columns: number
): { value: string; status: LetterStatus }[] => {
    return Array.from({ length: columns }, () => ({
        value: "",
        status: "NotStarted" as LetterStatus,
    }));
};
export function convertToObject(
    array: { value: string; status: LetterStatus }[][]
): Record<string, { value: string; status: LetterStatus }[]> {
    return array.reduce(
        (acc, row, rowIndex) => {
            acc[`row${rowIndex}`] = row;
            return acc;
        },
        {} as Record<string, { value: string; status: LetterStatus }[]>
    );
}

export function convertSingleToObject(
    array: { value: string; status: string }[]
): Record<string, { value: string; status: LetterStatus }> {
    return array.reduce(
        (acc, item, index) => {
            acc[`item${index}`] = item as any;
            return acc;
        },
        {} as Record<string, { value: string; status: LetterStatus }>
    );
}

export function convertToArray(
    obj: Record<string, { value: string; status: LetterStatus }[]>
): { value: string; status: LetterStatus }[][] {
    return Object.keys(obj)
        .sort()
        .map((key) => obj[key]);
}

export function convertSingleToArray(
    obj: Record<string, { value: string; status: LetterStatus }>
): { value: string; status: LetterStatus }[] {
    return Object.keys(obj)
        .sort()
        .map((key) => obj[key]);
}

export const checkLetter = (
    targetWord: string,
    letter: string,
    index: number
): LetterStatus => {
    if (!targetWord.includes(letter)) {
        return "NotInWord";
    }
    if (targetWord[index] === letter) {
        return "InWordAndPositionCorrect";
    }
    return "InWord";
};
