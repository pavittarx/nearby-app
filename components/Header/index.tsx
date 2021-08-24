import router from "next/router";

import styles from "./header.module.scss";
import Button from "@/_shared/Buttons";

const Header = () => {
  return (
    <header className={styles["app-header-ctr"]}>
      <div className={styles["logo-ctr"]} onClick={() => router.push("/")}>
        <span className={styles.logo}> Nearby </span>
      </div>
      <div className="">
        <Button
          name="Login/Register"
          type="primary"
          action={() => router.push("/login")}
        />
      </div>
    </header>
  );
};

export default Header;
