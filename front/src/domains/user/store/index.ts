import { persistentAtom } from "@nanostores/persistent";
import { UserStatisticType } from "../types";

export const UserStatisticStore = persistentAtom<UserStatisticType>(
    "statistic",
    {
        totalGamesPlayed: 0,
        totalGamesWon: 0,
        averageWordsPerTry: 0,
        winningPercent: 0,
        wordsOfTheDay: [],
    },
    { encode: JSON.stringify, decode: JSON.parse }
);
