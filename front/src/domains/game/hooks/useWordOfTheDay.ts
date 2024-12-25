import { useUserStatisticStore } from "@/domains/user/hooks";
import { useLaunguageStore } from "@/hooks";
import { wordsOfTheDay as wordsOfTheDayList } from "@/utils/words";
export const useWordOfTheDay = () => {
    const [
        { wordsOfTheDay, totalGamesPlayed, totalGamesWon, averageWordsPerTry },
        setState,
    ] = useUserStatisticStore();

    const { language } = useLaunguageStore();
    const targetWord = wordsOfTheDayList[language.language].filter(
        (word) => !wordsOfTheDay.includes(word)
    )[0];

    const onSuccess = (tries: number) => {
        const newWordsOfTheDay = [...wordsOfTheDay, targetWord];
        setState({
            wordsOfTheDay: newWordsOfTheDay,
            totalGamesPlayed: totalGamesPlayed + 1,
            totalGamesWon: totalGamesWon + 1,
            winningPercent:
                ((totalGamesWon + 1) / (totalGamesPlayed + 1)) * 100,
            averageWordsPerTry: (averageWordsPerTry ?? 0 + tries) / 2,
        });
    };
    const onFail = () => {
        alert("error");
    };
    return { targetWord, onFail, onSuccess };
};
