import React from "react";
import styles from "./login.module.scss";
import Link from "next/link";
const Login = () => {
  return <Link href={"/profile"} className={styles.login_menu_icon}></Link>;
};

export default Login;
