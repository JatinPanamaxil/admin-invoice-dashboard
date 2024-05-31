import { useRef, useEffect, useState } from "react";
import { Link, useSearchParams, Form } from "react-router-dom";
import axios from "../api/axios";
import "./AuthForm.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import InfoIcon from "@mui/icons-material/Info";
import { Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const USER_REGX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PSWD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const REGISTER_URL = "/register";
const LoginSignupPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPassword(PSWD_REGX.test(password));
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPassword]);

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGX.test(user);
    const v2 = PSWD_REGX.test(password);
    if (!v1 || !v2) {
      setErrMsg("InvalidEntry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email already registered");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <Typography>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="signup">signup</Link>
          </p>
        </section>
      ) : (
        <div className="container">
          <div className="form-container">
            <section>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                area-live="assertive"
              >
                {errMsg}
              </p>
            </section>
            <Typography
              variant="h3"
              color={colors.grey[300]}
              fontWeight="bold"
              sx={{ mb: "5px" }}
            >
              <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            </Typography>
            <Form method="post" onSubmit={handleSubmit}>
              <div className="input-container">
                <>
                  <span className={validName ? "valid" : "hide"}>
                    <CheckIcon />
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <ClearIcon />
                  </span>
                </>
                <input
                  type="email"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Email"
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uinote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />

                <div
                  id="uinote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <Grid className="info-icon">
                    <InfoIcon sx={{ mr: 1 }} />
                    <span>
                      Useremail: 2-15 chars, a-z, A-Z, 0-9, _ or - followed by
                      @, then domain name
                    </span>
                  </Grid>
                </div>
              </div>
              {isLogin ? (
                <div className="input-container">
                  <Grid>
                    <span className={validPassword ? "valid" : "hide"}>
                      <CheckIcon />
                    </span>
                    <span
                      className={
                        validPassword || !password ? "hide" : "invalid"
                      }
                    >
                      <ClearIcon />
                    </span>
                  </Grid>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="uinote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />
                  <div
                    id="uinote"
                    className={
                      passwordFocus && password && !validPassword
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <InfoIcon sx={{ mr: 1 }} />
                    <span>
                      Password: 8-24 chars, upper, lower, number, special
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="input-container">
                    <Grid>
                      <span className={validPassword ? "valid" : "hide"}>
                        <CheckIcon />
                      </span>
                      <span
                        className={
                          validPassword || !password ? "hide" : "invalid"
                        }
                      >
                        <ClearIcon />
                      </span>
                    </Grid>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      aria-invalid={validPassword ? "false" : "true"}
                      aria-describedby="uinote"
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    />

                    <div
                      id="uinote"
                      className={
                        passwordFocus && password && !validPassword
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <InfoIcon sx={{ mr: 1 }} />
                      <span>
                        Password: 8-24 chars, upper, lower, number, special
                      </span>
                    </div>
                  </div>
                  <Grid>
                    <span
                      className={validMatch && matchPassword ? "valid" : "hide"}
                    >
                      <CheckIcon />
                    </span>
                    <span
                      className={
                        validMatch || !matchPassword ? "hide" : "invalid"
                      }
                    >
                      <ClearIcon />
                    </span>
                  </Grid>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm password"
                    placeholder="Confirm Password"
                    required
                    onChange={(e) => setMatchPassword(e.target.value)}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <div className="input-instructions">
                    <div
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <InfoIcon sx={{ mr: 1 }} />
                      <span>Must match the first password input field.</span>
                    </div>
                  </div>
                </>
              )}
              <button
                disabled={
                  !validName || !validPassword || !validMatch ? true : false
                }
                type="submit"
              >
                Submit
              </button>
            </Form>
            <p>
              Don't have an account?
              <Link
                className="switch-form"
                to={`?mode=${isLogin ? "signup" : "login"}`}
              >
                {isLogin ? "Sign up" : "Login"}
              </Link>
            </p>
          </div>
        </div>
      )}
    </Typography>
  );
};

export default LoginSignupPage;
