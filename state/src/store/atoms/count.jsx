import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
})

export const evenSelector = selector({
    key: 'evenSelector',
    get: (props) => {
        const count = props.get(countAtom);
        return count % 2;
    }
})