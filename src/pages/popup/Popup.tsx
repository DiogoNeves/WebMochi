import React, { useState, ChangeEvent, KeyboardEvent } from "react"

export default function Popup(): JSX.Element {
  const [message, setMessage] = useState("")

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setMessage(event.target.value)
  }

  function handleSend(): void {
    if (message) {
      sendMessage(message)
      setMessage("")
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  function sendMessage(message: string): void {
    console.log("Message sent:", message)
  }

  return (
    <div className="chat-component">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}
