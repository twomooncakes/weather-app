import Button from "../UI/Button";
import css from "./Header.module.css";
import UnitToggle from "./UnitToggle";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { motion } from "framer-motion";

const Header = () => {
  const scrollToBottom = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight);
  }


  return (
    <header className={css.header}>
      <motion.h1 
        initial={{ y: -150 }}
        animate={{ y: 0 }}
      >
        Weather<span>App</span>
      </motion.h1>

      <div className={css.header_btns}>
        <Button onClick={scrollToBottom} isBubble={true}>
          <LocationOnOutlinedIcon />
        </Button>
        <UnitToggle />
      </div>
    </header>
  )
}

export default Header;