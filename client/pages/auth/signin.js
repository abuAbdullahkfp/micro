import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/useRequest";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    doRequest();
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h1>Sign In</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input onChange={handleEmail} className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" onChange={handlePassword} className="form-control" />
      </div>
      {errors}
      <button className="btn btn-primary mt-3">Sing In</button>
    </form>
  );
};

export default SignInPage;
