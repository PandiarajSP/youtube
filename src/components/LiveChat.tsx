import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState<string>();
  const dispatch = useDispatch();


  useEffect(() => {
    const i = setInterval(() => {

    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-150 ml-2 p-2 border border-black bg-slate-100 rounded-lg">
        <div>
          <ChatMessage name="Pandi" message="Hi" />
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-gray-400 flex" onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "Pandi",
          message: liveMessage
        }))
      }}>
        <input className="w-66" type="text" value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)} />
        <button className="px-2 mx-2 bg-green-500">Send</button>
      </form>
    </>
  )
}

export default LiveChat