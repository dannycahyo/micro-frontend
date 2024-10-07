import "./Button.css";

import { useState } from "react";

type ButtonProps = {
  defaultCount?: number;
};

export const Button = (props: ButtonProps) => {
  const [state, setState] = useState(props.defaultCount || 0);
  return (
    <div>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
