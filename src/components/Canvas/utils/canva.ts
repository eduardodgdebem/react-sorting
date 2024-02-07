type drawColumnsProps = {
  context: CanvasRenderingContext2D;
  heights: number[];
  selectedIndex?: number;
  color?: string;
  highlightColor?: string;
};

type generateFillColorProps = {
  highlightColor?: string;
  isSelectedIndex: boolean;
  color?: string;
};

const drawColumns = ({
  context,
  heights,
  selectedIndex,
  color,
  highlightColor,
}: drawColumnsProps) => {
  return new Promise(async (resolve, reject) => {
    try {
      let prevColumns: number[];
      let prevSelectedIndex: number | undefined;
      heights.forEach((height, index) => {
        context.fillStyle = generateFillColor({
          isSelectedIndex: selectedIndex === index,
          color,
          highlightColor,
        });
        if (
          prevColumns?.[index] !== height ||
          prevSelectedIndex === index ||
          selectedIndex === index ||
          color
        ) {
          const width = context.canvas.height / heights.length;
          context.clearRect(
            index * width - 1,
            0,
            width + 2,
            context.canvas.height
          );
          context.fillRect(
            index * width,
            context.canvas.height,
            width - 2,
            -height
          );
        }
      });
      prevColumns = heights;
      prevSelectedIndex = selectedIndex;
      resolve("");
    } catch (e) {
      reject(e);
    }
  });
};

const generateFillColor = ({
  highlightColor,
  isSelectedIndex,
  color,
}: generateFillColorProps) => {
  let fillColor = "#000000";
  if (isSelectedIndex && highlightColor) fillColor = highlightColor;
  if (color) fillColor = color;
  return fillColor;
};

export { drawColumns };
