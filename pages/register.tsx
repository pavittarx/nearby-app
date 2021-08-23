import { useState, useEffect } from "react";

import Header from "@/components/Header";

import styles from "@/_assets/scss/register.module.scss";
import Button from "@/_shared/Buttons";
import TextInput from "@/_shared/Input/TextInput";
import Radio from "@/_shared/Input/Radio";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    type: "",
  });

  return (
    <>
      <Header />
      <main className={styles["register-main-ctr"]}>
        <div className={styles["form-wrapper"]}>
          <h2> Register </h2>
          <div className={styles["input-wrapper"]}>
            <TextInput
              placeholder="Full Name*"
              value={data.name}
              setValue={(value: string) =>
                setData({ ...data, name: value })
              }
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <TextInput
              placeholder="Email*"
              value={data.email}
              setValue={(value: string) => setData({ ...data, email: value })}
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <TextInput
              type="password"
              placeholder="Password*"
              value={data.password}
              setValue={(value: string) =>
                setData({ ...data, password: value })
              }
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <TextInput
              placeholder="Phone"
              value={data.phone}
              setValue={(value: string) => setData({ ...data, phone: value })}
            />
          </div>
          <div className={styles["input-wrapper"]}>
            <h6> Choose an account type: </h6>
            <div className={styles["role-wrapper"]}>
              <Radio
                text="Buyer"
                value={data.type === "buyer"}
                setValue={(value: Boolean) =>
                  value
                    ? setData({ ...data, type: "buyer" })
                    : setData({ ...data, type: "" })
                }
              />
              <Radio
                text="Seller"
                value={data.type === "seller"}
                setValue={(value: Boolean) =>
                  value
                    ? setData({ ...data, type: "seller" })
                    : setData({ ...data, type: "" })
                }
              />
            </div>
          </div>
          <div className={styles["input-wrapper"]}>
            <Button name="Register" action={() => {}} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
