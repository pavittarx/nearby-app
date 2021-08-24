import { useState, useEffect } from "react";

import Header from "@/components/Header";

import styles from "@/_assets/scss/login.module.scss";
import Button from "@/_shared/Buttons";
import TextInput from "@/_shared/Input/TextInput";
import { login } from "@/controllers/auth";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const loginhHandler = async () => {
    const result = await login(data);

    if (result) {
      localStorage.setItem("token", result?.data?.token);
    }
  };

  return (
    <>
      <Header />
      <main className={styles["login-main-ctr"]}>
        <div className={styles["login-wrapper"]}>
          <h2> Login </h2>
          <div className={styles["input-wrapper"]}>
            <TextInput
              placeholder="Email"
              value={data.email}
              setValue={(value: string) => setData({ ...data, email: value })}
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <TextInput
              placeholder="Password"
              value={data.password}
              setValue={(value: string) =>
                setData({ ...data, password: value })
              }
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <Button name="Login" action={loginhHandler} />
          </div>

          <div>
            New to Nearby? <a href="/register"> Register </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
