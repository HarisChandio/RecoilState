
import ReactDOM from "react-dom";
import React, { Suspense, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import {CountContext} from "./context";
const Home = React.lazy(() => import("./pages/Home"));
const Blogs = React.lazy(() => import("./pages/Blogs"));

import NoPage from "./pages/NoPage";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </>
  )
}

function Count({ setCount }) {
  console.log("count re-render")
  return <div>
    <CountRenderer ></CountRenderer>
    <Buttons setCount={setCount}></Buttons>
  </div>
}
function CountRenderer() {
  const count = useContext(CountContext)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({ setCount }) {
  const count = useContext(CountContext)
  return <>
    <button onClick={() => { setCount(count + 1) }}>Increase</button>
    <button onClick={() => { setCount(count - 1) }}>Decrease</button>
  </>
}

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate("/")
      }}> Home</button>
      <button onClick={() => {
        navigate("/blogs")
      }}> Blogs</button>
    </div >
  )
}