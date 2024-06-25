import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomString(20) + " 🙏",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "vipin Sambhoriya",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="pl-2 w-[38rem] "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
