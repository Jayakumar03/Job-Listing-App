import { useState, useEffect } from "react";
import axois from "axios";
import { useNavigate } from "react-router";
import "./signup.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleSignup = () => {
    navigate("/signin");
  };

  const nameHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, name: e.target.value };
    });
    console.log(user.name);
  };

  const emailHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, email: e.target.value };
    });
    console.log(user.email);
  };

  const numberHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, number: e.target.value };
    });
    console.log(user.number);
  };

  const passwordHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, password: e.target.value };
    });
    console.log(user.password);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axois
      .post("https://vast-jade-tick-tutu.cyclic.app/api/v1/signup", {
        name: user.name,
        email: user.email,
        number: user.number,
        password: user.password,
      })
      .then((response) => {
        // handle response
        console.log("user added successfully", response.data);
        if (response.data.success) {
          Cookies.set("token", response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
        //! Store name and token in localstorage
      })
      .catch((error) => {
        // handle error
        console.log("err", error);
      });

    setUser({
      name: "",
      email: "",
      number: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <div>
            <section className="name-section">
              <h1>Create an account</h1>
              <p>Your personal job finder is here</p>
            </section>

            <section className="input-section">
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={user.name}
                  onChange={nameHandler}
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={user.email}
                  onChange={emailHandler}
                />

                <input
                  type="number"
                  name="number"
                  placeholder="Number"
                  value={user.number}
                  onChange={numberHandler}
                />

                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={user.password}
                  onChange={passwordHandler}
                />

                <div className="">
                  <input type="checkbox" name="checkbox" />
                  <span>
                    By creating an account, I agree to our terms of use and
                    privacy policy
                  </span>
                </div>

                <button type="submit" onClick={submitHandler}>
                  Create Account
                </button>
              </form>

              <section className="signup-section">
                <p>Already have an account?</p>
                <p onClick={handleSignup}>Sign In </p>
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
