import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <Navbar>
      <main className={classes.main}> {props.children} </main>{" "}
    </Navbar>
  );
};
export default Layout;
