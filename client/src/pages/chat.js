import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getApi } from "../api/index";

const Chat = () => {
  let navigate = useNavigate();
  const [chatState, setchatState] = useState({
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
    messages: {},
    message: "",
    amount: 0,
    uuid: uuidv4(),
  });

  const sendMessage = () => {
    const msg = JSON.parse(JSON.stringify(chatState.messages));
    msg[new Date() + "client"] = chatState.message;
    setchatState({ ...chatState, messages: msg, message: "" });
  };

  const addAmount = () => {};

  useEffect(() => {
    if (!chatState.user || !chatState.user.email) {
      navigate("/auth");
    }
  }, []);

  return (
    <div>
      <div className="fixed right-4 top-0">
        <p
          className="text-lg underline italic text-red-400 cursor-pointer"
          onClick={() => {
            localStorage.setItem("user", null);
            navigate("/auth");
          }}
        >
          Log out
        </p>
      </div>
      <div>
        Your current balance{" "}
        {chatState.user && chatState.user.amount
          ? chatState.user.amount
          : "0.0"}
      </div>
      <div className="flex mb-20">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="account"
        ></label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-grey-darker"
          id="account"
          type="number"
          placeholder="Add to your account"
          value={chatState.amount}
          onChange={(e) =>
            setchatState({ ...chatState, amount: e.target.value })
          }
        />
        <button
          className="text-white bg-red-500  font-bold py-2 px-4 mx-4 rounded"
          type="button"
          onClick={addAmount}
        >
          Add
        </button>
      </div>
      <div>
        Hey,{" "}
        {chatState &&
          chatState.user &&
          chatState.user.email &&
          chatState.user.email.split("@")[0]}
        . Let's talk!
      </div>
      <div className="">
        <div className="h-80 overflow-y-auto bg-white shadow-md rounded px-8 pt-6 pb-8  flex flex-col"></div>
        <div className="flex flex-col">
          <input
            className="shadow border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="message"
            value={chatState.message}
            onChange={(e) =>
              setchatState({ ...chatState, message: e.target.value })
            }
          />
          <button
            className="text-white bg-red-500  font-bold py-2 px-4 rounded"
            type="button"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
