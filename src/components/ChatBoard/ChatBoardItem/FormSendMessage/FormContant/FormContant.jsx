import style from "../FormSendMessage.module.scss";

function FormContant({ formik: formik }) {
  return (
    <>
      <div className={style.chat__input}>
        <form className={style.input__wrapper} onSubmit={formik.handleSubmit}>
          <textarea
            className={style.input__newMessage}
            id="message"
            name="message"
            required
            type="text"
            placeholder="Write your message"
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>
          <button className={style.input__btn} type="submit">
            send
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContant;
