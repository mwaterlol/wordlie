export const LetterStatuses = [
    "NotStarted",
    "NotInWord",
    "InWord",
    "InWordAndPositionCorrect",
] as const;

export type LetterStatus = (typeof LetterStatuses)[number];
