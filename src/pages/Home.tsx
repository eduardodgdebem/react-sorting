import "./Home.css";
import Canvas from "../components/Canvas/Canvas";
import Header from "../components/Header/Header";
import Input from "../components/Inputs/Input";
import { useState } from "react";
import create from "zustand";

const canvasProps = {
  width: 500,
  height: 500,
};

function Home() {
  const [range, setRange] = useState(22);

  return (
    <>
      <Header />
      <main>
        <Input setRange={setRange} />
        <Canvas canvasProps={canvasProps} range={range}></Canvas>
      </main>
    </>
  );
}

export default Home;
