import style from "../FormSendMessage.module.scss";

function RequestError() {
  return (
    <>
      <p className={style.txt__error}>request error..</p>
    </>
  );
}

export default RequestError;
