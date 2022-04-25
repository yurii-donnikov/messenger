import { GoogleLogin } from "react-google-login";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../Redux/auth/authTypes";

const clientId =
  "155278585215-dtgvviefee9250oaeogb7man5h7knonh.apps.googleusercontent.com";

function LoginAuth() {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    dispatch({ type: LOGIN_SUCCESS, payload: res.profileObj });
  };
  const onFailure = (res) => {
    console.log("Login failed res: ", res);
  };
  return (
    <div className={style.authBtn} id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginAuth;
