import { userState } from "../atoms/user";
import { selector } from "recoil";

type userType ={
    id: number | null,
    userName: string | null,
    userEmail: string | null,
    role: string | null,
};
export const userIdState = selector({
    key: 'userIdState',
    get: ({ get }) => {
        const state : userType = get(userState);
        return state.id;
    },
});
