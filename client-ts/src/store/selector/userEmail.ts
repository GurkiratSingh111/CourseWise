import { userState } from "../atoms/user";
import { selector } from "recoil";

type userType ={
        id: string | null,
        userName: string | null,
        userEmail: string | null,
        role: string | null,
};

export const userEmailState = selector({
    key: 'userEmailState',
    get: ({ get }) => {
        const state : userType = get(userState);
        return state.userEmail;
    },
});
