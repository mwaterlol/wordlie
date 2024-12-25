// import { useLocation } from "react-router-dom";
import { Stack } from "@mantine/core";
import { GameBoard } from "../components";
import { useWordOfTheDay } from "../hooks/useWordOfTheDay";

export const GamePage = () => {
    // const location = useLocation();
    // console.log(new URLSearchParams(location.search).get("type"));
    const wordOfTheDayState = useWordOfTheDay();
    return (
        <Stack mih="100vh">
            <GameBoard {...wordOfTheDayState} />
        </Stack>
    );
};
