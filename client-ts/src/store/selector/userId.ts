import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userIdState = selector({
    key: 'userIdState',
    get: ({ get }) => {
        const state = get(userState);
        return state.id;
    },
});
