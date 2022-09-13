import { useRef, useEffect, useState } from "react";
import { useCanvasStore } from "../../store";
import {
  sleep,
  generateRandomArray,
  swap,
  defaultCompare,
  Compare,
} from "./utils/sort";
import "./Canvas.css";
import { drawColumns } from "./utils/canva";

type props = {
  range: number;
};

const HIGHLIGHT_COLOR = "#ff65be";
const RELATIVE_SORTING_TIME = 15000;

const Canvas = (props: props) => {
  const { range } = props;
  const canvasRef = useRef(null) as any;
  const [context, setContext] = useState<CanvasRenderingContext2D>();
  const [randomHeights, setRandomHeights] = useState<number[]>([]);
  const startSorting = useCanvasStore((state) => state.startSorting);
  const setIsSorting = useCanvasStore((state) => state.setIsSorting);
  const setStartSorting = useCanvasStore((state) => state.setStartSorting);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    setContext(ctx);
    setRandomHeights(generateRandomArray(range, ctx.canvas.height));
  }, []);

  useEffect(() => {
    context &&
      setRandomHeights(generateRandomArray(range, context.canvas.height));
  }, [range]);

  useEffect(() => {
    startSorting && handleSorting();
  }, [startSorting]);

  useEffect(() => {
    handleDraw();
  }, [randomHeights]);

  const handleDraw = async () => {
    context && (await drawColumns({ context, heights: randomHeights }));
  };

  const bubbleSort = async () => {
    if (!context) return;

    for (let i = 0; i < range; i++) {
      for (let j = 0; j < range - 1 - i; j++) {
        if (
          defaultCompare(randomHeights[j], randomHeights[j + 1]) ===
          Compare.BIGGER_THAN
        ) {
          swap(randomHeights, j, j + 1);
        }
        await drawColumns({
          context,
          heights: [...randomHeights],
          selectedIndex: j + 1,
          highlightColor: HIGHLIGHT_COLOR,
        });
        await sleep(RELATIVE_SORTING_TIME / range ** 2);
      }
    }
    await drawColumns({
      context,
      heights: [...randomHeights],
      color: HIGHLIGHT_COLOR,
    });
  };

  const handleSorting = async () => {
    setStartSorting(false);
    setIsSorting(true);
    await bubbleSort();
    setIsSorting(false);
  };

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={1000} height={1000} />
    </div>
  );
};

export default Canvas;
