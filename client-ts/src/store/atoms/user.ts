import { atom } from "recoil";

type userType = {
    id: string | null,
    userName: string | null,
    userEmail: string | null,
    role: string | null,
}
export const userState  = atom<userType>({
    key: 'userState',
    default: {
        userEmail: null,
        userName: null,
        role: null,
        id: null
    },
});
