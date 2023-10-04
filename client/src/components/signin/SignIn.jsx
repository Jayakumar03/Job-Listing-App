import { useState, useEffect } from "react";
import axois from "axios";
import "./signin.css";

export const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (e) => {
    setValues((prevvalue) => {
      return { ...prevvalue, email: e.target.value };
    });
    console.log(values.email);
  };

  const passwordHandler = (e) => {
    setValues((prevvalue) => {
      return { ...prevvalue, password: e.target.value };
    });
    console.log(values.password);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axois
      .post("http://localhost:3000/api/v1/signin", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        // handle response
        console.log("user added successfully");
      })
      .catch((error) => {
        // handle error
        console.log("err", error);
      });

    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <div>
            <section className="name-section">
              <h1>Already have an account?</h1>
              <p>Your personal job finder is here</p>
            </section>

            <section className="input-section">
              <form onSubmit={submitHandler}>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={values.email}
                  onChange={emailHandler}
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={values.password}
                  onChange={passwordHandler}
                />
                <button type="submit" onClick={submitHandler}>
                  Sign in
                </button>
              </form>

              <section className="signup-section">
                <p>Don’t have an account?</p>
                <a href="##">Sign Up</a>
              </section>
            </section>
          </div>
        </div>

        <div className="image-container">
          <h1>Your Personal Job Finder</h1>
        </div>
      </div>
    </>
  );
};
