import css from "./Button.module.css";
import { motion } from "framer-motion";

const Button = ({ children, onClick, isBubble }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ y: 5 }}
      onClick={onClick} 
      className={`${css.btn} ${isBubble ? css.btn_bubble : css.btn_regular}`}
    >
      {children}
    </motion.button>
  )
}

export default Button;