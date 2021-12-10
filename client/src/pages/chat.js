import React, { useEffect, useState } from "react";
import { getApi } from "../api/index";

const Chat = () => {
  const [chatState, setchatState] = useState({
    user: JSON.parse(localStorage.getItem("user")),
    messages: {},
    message: "",
    amount: 0,
  });

  const sendMessage = () => {
    const msg = JSON.parse(JSON.stringify(chatState.messages));
    msg[new Date() + "client"] = chatState.message;
    setchatState({ ...chatState, messages: msg, message: "" });
  };

  const addAmount = () => {};

  useEffect(() => {}, []);

  return (
    <div>
      {console.log(chatState)}
      <div>Your current balance XXX.XX</div>
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
