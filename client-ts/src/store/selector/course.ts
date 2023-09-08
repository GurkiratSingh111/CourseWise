import { selector } from "recoil";
import { courseState } from "../atoms/course";

type courseType = {
    isLoading: boolean,
    course: {
        id: number,
        name: string,
        price: number,
        image: string,
        description: string,
        published: boolean,
        createdBy: string,
        } | null;  
    };


export const isCourseLoading = selector({
    key: 'isCourseLoadingState',
    get: ({ get }) => {
        const state = get(courseState);

        return state.isLoading;
    },
});

export const courseDetails = selector({
    key: 'courseDetailsState',
    get: ({ get }) => {
        const state = get(courseState);

        return state.course;
    },
});

export const courseName = selector({
    key: 'courseNameState',
    get: ({ get }) => {
        const state : courseType  = get(courseState)
        if (state.course) {
            return state.course.name;
        }
        return "";
    },
});

export const coursePrice = selector({
    key: 'coursePriceState',
    get: ({ get }) => {
        const state : courseType = get(courseState);
        if (state.course) {
            return state.course.price;
        }
        return "";
    },
});

export const courseImage = selector({
    key: 'courseImageState',
    get: ({ get }) => {
        const state : courseType = get(courseState);
        if (state.course) {
            return state.course.image;
        }
        return "";
    },
});

