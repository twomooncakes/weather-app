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
    <div className={css.header_container}>
      <header className={css.header}>
        <motion.h1 
          initial={{ y: -150 }}
          animate={{ y: 0 }}
        >
          Weather<span>App</span>
        </motion.h1>

        <motion.div 
          className={css.header_btns}
          initial={{ y: -150 }}
          animate={{ y: 0 }}
        >
          <Button onClick={scrollToBottom} isBubble={true}>
            <LocationOnOutlinedIcon />
          </Button>
          <UnitToggle />
        </motion.div>
      </header>

    </div>
  )
}

export default Header;