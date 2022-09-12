import { useCanvasStore } from "../../store";
import ButtonMarquee from "../ButtonMarquee/ButtonMarquee";
import RangeInput from "../RangeInput/RangeInput";
import "./Input.css";

const Input = (props: any) => {
  const setStartSorting = useCanvasStore((state) => state.setStartSorting);
  const isSorting = useCanvasStore((state) => state.isSorting);

  return (
    <>
      <div className="inputs-container">
        <header>
          <h1>SETTINGS</h1>
        </header>
        <section>
          {/* <div> */}
          <RangeInput
            min="4"
            max="60"
            disabled={isSorting}
            onChange={(e) => props.setRange(e.target.value)}
          />
          {/* </div> */}
          <div className="btn-container">
            <ButtonMarquee
              onClick={() => setStartSorting(true)}
              disabled={isSorting}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Input;
