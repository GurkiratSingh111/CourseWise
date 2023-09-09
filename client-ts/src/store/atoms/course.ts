import { atom } from "recoil";


type courseType = {
    isLoading: boolean,
    course: {
        id: number,
        name: string,
        price: number,
        imageLink: string,
        description: string,
        published: boolean,
        createdBy: string
        } | null;  
    } | null;

export const courseState = atom<courseType>({
    key: 'courseState',
    default: {
        isLoading: true,
        course: null
}
});
