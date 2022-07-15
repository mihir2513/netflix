import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { mergeClasses } from "@material-ui/styles";
const Logo = (props) => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="Netflix logo" {...props} />
      </Link>
    </>
  );
};
export default Logo;
