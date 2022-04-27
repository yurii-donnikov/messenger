import React, { useEffect } from "react";
import { useFormik } from "formik";
import StatisDataIn from "../../../../StatisDataIn";
import { cloneDeep } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { chatRender } from "../../../../Redux/chatList/chatListSelectors";
import { fetchNewMessage } from "../../../../Redux/Thunk/thunkFetch";
import { featchInfo } from "../../../../Redux/Thunk/thunkSelectors";
import { featchError } from "../../../../Redux/Thunk/thunkSelectors";
import FormContant from "./FormContant/FormContant";
import RequestError from "./RequestError/RequestError";

function FormSendMessage({ usersChat: usersChat, setUsersChat: setUsersChat }) {
  const renderChat = useSelector(chatRender);
  const fetchInform = useSelector(featchInfo);
  const fetchErrors = useSelector(featchError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewMessage());
  }, []);

  const processIncomingMessage = (item) => {
    return function () {
      const incomingMessage = {
        sender: "companion",
        message: fetchInform.value,
        date: new Date(),
        id: Math.random(),
      };
      let storage = JSON.parse(localStorage.getItem("staticData"));
      let itemStorage;
      storage.forEach((chatItem) => {
        if (chatItem.id === item.id) {
          chatItem.chat.push(incomingMessage);
          itemStorage = chatItem;
        }
      });
      localStorage.setItem("staticData", JSON.stringify(storage));
      item.chat.push(incomingMessage);
      let copyStorage = cloneDeep(itemStorage);
      setUsersChat(copyStorage);
      renderChat();
    };
  };

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      if (/[a-zA-Z0-9А-Яа-я_\S]/.test(values.message)) {
        let newMessage = {
          sender: "user",
          message: values.message,
          date: new Date(),
          id: Math.random(),
        };
        StatisDataIn.forEach((data) => {
          if (data.id === usersChat.id) {
            let storage = JSON.parse(localStorage.getItem("staticData"));
            let itemStorage;
            storage.forEach((chatItem) => {
              if (chatItem.id === usersChat.id) {
                chatItem.chat.push(newMessage);
                itemStorage = chatItem;
              }
            });
            localStorage.setItem("staticData", JSON.stringify(storage));
            data.chat.push(newMessage);
            let copyStorage = cloneDeep(itemStorage);
            setUsersChat(copyStorage);
            renderChat();
            if (!fetchErrors) {
              setTimeout(processIncomingMessage(data), 2000);
              dispatch(fetchNewMessage());
            }
          }
        });
      }
      formik.resetForm();
    },
  });

  return !fetchErrors ? <FormContant formik={formik} /> : <RequestError />;
}

export default FormSendMessage;
