import Button from "../UI/Button";
import css from "./Header.module.css";
import UnitToggle from "./UnitToggle";

const Header = () => {
  return (
    <header className={css.header}>
      <h1>Weather App</h1>
      <div>
        <Button>Change location</Button>
        <UnitToggle />
      </div>
    </header>
  )
}

export default Header;