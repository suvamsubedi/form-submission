import { useState } from "react";
import "./App.css";
import FormInput from "./formInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    contact: "",
    address: "",
    uploadPhoto: "",
    uploadCV: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",

      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "Contact",
      type: "number",
      placeholder: "Contact",
      errorMessage: "Contact should be number",
      label: "Contact",
      required: true,
    },
    {
      id: 4,
      name: "Address",
      type: "text",
      placeholder: "Address",
      errorMessage: "please fill addres field",
      label: "Address",

      required: true,
    },

    {
      id: 5,
      name: "UploadPhoto",
      type: "file",
      label: "UploadPhoto",
      placeholder: "UploadPhoto",
      errorMessage: "please upload your photo",
      required: true,
    },
    {
      id: 6,
      name: "UploadCV",
      type: "file",
      label: "UploadCV",
      placeholder: "UploadCV",
      errorMessage: "please upload CV",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Submit form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
