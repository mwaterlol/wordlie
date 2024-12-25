import { useLaunguageStore } from "@/hooks";
import {
    words5Letters,
    words6Letters,
    words7Letters,
    words8Letters,
    words9Letters,
} from "@/utils/words";

export const useGetArcadeStats = () => {
    const { language } = useLaunguageStore();
    const totalFiveWords = words5Letters[language.language].length;
    const totalSixWords = words6Letters[language.language].length;
    const totalSevenWords = words7Letters[language.language].length;
    const totalEightWords = words8Letters[language.language].length;
    const totalNineWords = words9Letters[language.language].length;
    return {
        totalFiveWords,
        totalSixWords,
        totalSevenWords,
        totalEightWords,
        totalNineWords,
    };
};
