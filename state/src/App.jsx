import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import { todoAtom, filterAtom, filteredTodos } from "./store/atoms/todo"
import { useState } from "react";
function App() {
  return (
    <div>
      <RecoilRoot>
        <Inputs />
        <Todos />
        <FilteredTodos />
      </RecoilRoot>
    </div>
  )
}

function Todos() {
  const todos = useRecoilValue(todoAtom);
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
        </div>
      ))}
    </div>
  )
}

//recoil

function Inputs() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [todo, setTodo] = useRecoilState(todoAtom);
  return (
    <div>
      <label htmlFor="title"> Input title</label>
      <input type="text" id="title" onChange={(e) => {
        setTitle(e.target.value)
      }} />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" onChange={(e) => {
        setDescription(e.target.value)
      }} />
      <button onClick={() => {
        setTodo([
          ...todo,
          {
            title,
            description
          }
        ])
      }}>Add todo</button>
    </div>
  )
}

function FilteredTodos() {
  const [filter, setFilter] = useRecoilState(filterAtom);
  const filtered = useRecoilValue(filteredTodos);
  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <input type="text" id="filter" onChange={(e) => {
        setFilter(e.target.value)
      }} />
      {filter && filtered.length > 0 ? (
        filtered.map((todo, index) => (
          <div key={index}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
          </div>
        ))
      ) : null}
    </div>
  )
}

export default App;