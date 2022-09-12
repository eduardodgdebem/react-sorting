import "./ButtonMarquee.css";

type buttonProps = {
  onClick: () => void;
  disabled: boolean;
};

const ButtonMarquee = (props: buttonProps) => {
  return (
    <>
      <button className="sort-btn" {...props}>
        <div className="hovering-marquee">
          <p>SORT</p>
        </div>
      </button>
    </>
  );
};

export default ButtonMarquee;
