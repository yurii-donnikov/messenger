import LoginAuth from "../../googleAuth/LoginAuth";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import style from "./Login.module.scss";

const clientId =
  "155278585215-dtgvviefee9250oaeogb7man5h7knonh.apps.googleusercontent.com";

function Login() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className={style.loginPage}>
      <h1 className={style.loginPage__topic}>Log in with google account</h1>
      <LoginAuth />
    </div>
  );
}
export default Login;
