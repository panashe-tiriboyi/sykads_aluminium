import Styles from "./Button.module.css";

function Button({ text }) {
  return (
    <button className="btn btn-outline-warning btn-sm text-light mx-2">
      {text}
    </button>
  );
}

export default Button;
