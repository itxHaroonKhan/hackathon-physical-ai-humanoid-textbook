import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './chat.css';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    const messageToSend = input;
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://backend-deploy-yt.onrender.com/chat", {
        message: messageToSend
      });

      const botReply = res.data.reply || res.data.response || res.data.message || "No response from server";
      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message || "Server unreachable";
      setMessages(prev => [...prev, { sender: "bot", text: `Error: ${errorMsg}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) sendMessage();
  };

  return (
    <div className="chat-container">
      {/* Chat toggle button */}
      {!open && (
        <button className="chat-button" onClick={() => setOpen(true)}>
          💬 Chat
        </button>
      )}

      {open && (
        <div className="chat-box">
          {/* Header with close button */}
          <div className="chat-header">
            AI Assistant
            <button className="chat-close" onClick={() => setOpen(false)}>×</button>
          </div>

          {/* Messages */}
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.sender}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="bubble bot"><em>Typing...</em></div>}
          </div>

          {/* Input */}
          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              disabled={loading}
            />
            <button onClick={sendMessage} disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
