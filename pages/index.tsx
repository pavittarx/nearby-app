import { useState, useEffect } from "react";

import Header from "@/components/Header";

import Button from "@/_shared/Buttons";
import TextInput from "@/_shared/Input/TextInput";

import styles from "@/_assets/scss/home.module.scss";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Header />
    </>
  );
};

export default App;
