import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/OnClickOutside";
import Chatbot from "./Chatbot";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
export default function ChatbotButton() {
  const [chatBot, setChatBot] = useState(false);
  const chatBotRef = useRef(null);
  useOnClickOutside(chatBotRef, () => setChatBot(false));
  return (
    <div className="fixed bottom-0 right-0 z-50 mb-4 mx-9 lg:mx-32">
      {!chatBot && (
        <button
          className="w-16 h-16 rounded-lg bg-tertiary"
          onClick={() => setChatBot(true)}
        >
          <ChatBubbleOutlineIcon style={{ color: "white" }} />
        </button>
      )}
      {chatBot && (
        <div ref={chatBotRef}>
          <Chatbot />
        </div>
      )}
    </div>
  );
}
