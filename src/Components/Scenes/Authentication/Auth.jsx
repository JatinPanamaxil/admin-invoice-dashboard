import React from "react";

import AuthForm from "../../AuthForm";
import { json, redirect } from "react-router-dom";

const Auth = ({ handleAuth }) => {
  return (
    <div>
      <AuthForm handleAuth={handleAuth} />
    </div>
  );
};

export default Auth;

export async function action(request) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }

  return redirect("Dashboard");
}
