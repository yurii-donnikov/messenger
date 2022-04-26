import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import style from "./style.module.scss";
import { logoutSuccess } from "../Redux/auth/authActions";

const clientId =
  "155278585215-dtgvviefee9250oaeogb7man5h7knonh.apps.googleusercontent.com";

function LogoutAuth() {
  const dispatch = useDispatch();
  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };
  return (
    <div className={style.logoutBtn} id="signInButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default LogoutAuth;
