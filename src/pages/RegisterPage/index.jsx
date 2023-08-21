import React from "react";
import SignUp from "./sign-up/SignUp";

export default function RegisterPage() {
  return (
    <div className="page">
      <div className="form_container">
        <h1>회원가입</h1>
        <SignUp />
        <p>
          이미 계정이 있습니까?<Link to={"/login"}>가입하기</Link>
        </p>
      </div>
    </div>
  );
}
