import "./RangeInput.css";

type props = {
  min: string;
  max: string;
  disabled: boolean;
  onChange: (e: any) => void;
};

const RangeInput = (props: props) => {
  return (
    <div className="input-container">
      <label className="input-label">columns size</label>
      <input className="range-input" id="range-input" type="range" {...props} />
    </div>
  );
};

export default RangeInput;
