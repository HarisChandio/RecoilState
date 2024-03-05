import { atom, selector } from "recoil";

export const todoAtom  =   atom({
    key: "todoAtom",
    default: []
});

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
});

export const filteredTodos = selector({
    key: "filteredTodos",
    get: ({ get }) => {
      const todos = get(todoAtom);
      const filter = get(filterAtom);
      if (!filter) {
        return todos; 
      } else {
        return todos.filter(todo => 
          todo.title.includes(filter) || todo.description.includes(filter)
        );
      }
    }
  });
