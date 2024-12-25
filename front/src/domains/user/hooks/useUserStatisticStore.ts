import { useStore } from "@nanostores/react";
import { UserStatisticStore } from "../store";
import { UserStatisticType } from "../types";

export const useUserStatisticStore = () => {
    const state = useStore(UserStatisticStore);

    const setState = (value: Partial<UserStatisticType>) => {
        UserStatisticStore.set({ ...state, ...value });
    };

    return [state, setState] as const;
};
