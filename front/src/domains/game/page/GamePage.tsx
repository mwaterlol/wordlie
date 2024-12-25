// import { useLocation } from "react-router-dom";
import { GameBoard } from "../components";
import { useWordOfTheDay } from "../hooks/useWordOfTheDay";

export const GamePage = () => {
    // const location = useLocation();
    // console.log(new URLSearchParams(location.search).get("type"));
    const wordOfTheDayState = useWordOfTheDay();
    return (
        <>
            <GameBoard {...wordOfTheDayState} />
        </>
    );
};
