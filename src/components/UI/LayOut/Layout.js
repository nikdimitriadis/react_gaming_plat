import styles from "./Layout.module.css";

const Layout = (props) => {
  return <main className={styles.hero}>{props.children}</main>;
};

export default Layout;
