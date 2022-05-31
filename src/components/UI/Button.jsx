import css from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      {children}
    </button>
  )
}

export default Button;