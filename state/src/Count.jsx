import { RecoilRoot, useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count.jsx";
const App = () => {

  return (
    <>
      <Count />
    </>
  )
}
function Count() {
  console.log('count re- render')
  return (
    <>
      <RecoilRoot>
        <CountRenderer/>
        <Buttons/>
        <EventCount></EventCount>
      </RecoilRoot>
    </>
  )
}
function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      <b>{count}</b>
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  console.log("button re render")
  return (
    <div>
      <button onClick={() => {
        setCount((count) => count + 1)
      }}> Increment</button>
      <button onClick={() => {
        setCount((count) => count - 1)
      }}>Decrement</button>
    </div>
  )
}

function EventCount(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is even" : "It is odd"}
  </div>
}
export default App;