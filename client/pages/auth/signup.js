import {useState} from 'react'  
import useRequest from '../../hooks/useRequest';
import Router from "next/router";

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });
  
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    doRequest()
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h1>Sign Up </h1>
      <div className="form-group">
        <label>Email Address</label>
        <input onChange={handleEmail} value={email} className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          onChange={handlePassword}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary mt-3">Sing Up</button>
    </form>
  );
};



export default SignupPage;
