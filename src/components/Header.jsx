import Logo from "./Logo";
import RegisterLink from "./RegisterLink";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleLanguage } from "../modules/langSlice";
const Header = () => {
  const langState = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          <Button variant="text" onClick={() => dispatch(toggleLanguage())}>
            {langState === "Eng" ? "Japanese" : "English"}
          </Button>

          <RegisterLink url="https://example.com/register" />
        </div>
      </div>
    </header>
  );
};
export default Header;
