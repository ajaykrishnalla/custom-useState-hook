import React from "react";
import "./styles.css";
import { useForm } from "./useForm";

export default function App() {
  const [details, handleChange] = useForm({
    name: "",
    phone: ""
  });
  console.log(details);
  return (
    <React.Fragment>
      <input
        type="text"
        name="name"
        value={details.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="phone"
        value={details.phone}
        onChange={handleChange}
      />
    </React.Fragment>
  );
}
