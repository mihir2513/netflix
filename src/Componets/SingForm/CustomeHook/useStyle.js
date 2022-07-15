import { makeStyles } from "@material-ui/core";
// import image from "../../../../public/assets/"
import bg from '../CustomeHook/home-bg.jpeg'
const useStyle = makeStyles(() => ({
  input: {
    background: "#333",
    borderRadius: "4px",
    border: "0",
    color: "#fff",
    height: "50px",
    lineHeight: "50px",
    padding: "5px 20px",
    marginBottom: "20px",
  },
  title: {
    color: "#fff",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "28px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "570px",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: "5px",
    width: "100%",
    margin: "auto",
    maxWidth: "450px",
    padding: "60px 68px 40px",
    marginBottom: "100px",
  },
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "450px",
    width: "100%",
  },
  Button: {
    background: "#e50914",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 12px",
    padding: "16px",
    border: "0",
    color: "white",
    cursor: "pointer",
  },
  text: {
    color: "#8c8c8c",
    fontSize: "16px",
    fontWeight: "500",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginRight: "30px",
    cursor: "pointer",
    textDecoration: "none",
    marginLeft: "5px",
  },
  navBar: {
    maxWidth: "1850px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "175px",
    marginRight: "auto",
    marginLeft: "auto",
  },
 home: {
    background: `url(${bg})`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "30px 50px",
  },
  navbarHome: {
    maxWidth: "1850px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "175px",
    marginBight: "auto",
    marginLeft: "auto",
  },

  navbarSignin: {
    marginBottom: "75px",
  },
  logo: {
    height: "32px",
    width: "108px",
  },

  signinButton: {
    display: "block",
    backgroundColor: "#e50914",
    width: "84px",
    height: "fit-content",
    color: "#fff",
    border: "0",
    fontSize: "15px",
    borderRadius: "3px",
    padding: "8px 17px",
    cursor: "pointer",
  },

  headerLink: {
    padding: "5px",
  },

  link: {
    color: "#fff",
    marginLeft: "25px",
    cursor: "pointer",
  },

  wrapperHome: {
    textAlign: "center",
  },

  titleHome: {
    color: "white",
    maxWidth: "640px",
    fontSize: "50px",
    fontWeight: "700",
    margin: "auto",
  },
}));
export default useStyle;
