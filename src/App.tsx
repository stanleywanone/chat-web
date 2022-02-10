import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"

import io from "socket.io-client"

const socket = io("http://localhost:3001", { transports: ["websocket"] })

const App = () => {
  const [state, setState] = useState({ message: "", name: "" })
  const [chat, setChat] = useState([{ message: "test", name: "123" }])

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name: name, message: message }])
    })
  }, [chat])

  const renderChat = () => {
    return chat.map(({ name, message }, index) => {
      return (
        <div style={{ display: "flex" }} key={index}>
          <p style={{ backgroundColor: "#EDF2F7" }}>{name}</p>
          <p> : {message}</p>
        </div>
      )
    })
  }

  const sendMessage = (e: any) => {
    e.preventDefault()
    socket.emit("message", { name: state.name, message: state.message })
    console.log("name")
    setState({ message: "", name: "" })
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "repeat(8, 1fr)",
      }}
    >
      <header
        style={{
          gridRow: "1",
          display: "flex",
          alignItems: "center",
          fontSize: "48px",
          fontWeight: "bold",
          backgroundColor: "#EDF2F7",
        }}
      >
        Chat Web
      </header>
      <div
        style={{
          gridRow: "2 / span 6",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Messager</h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              height: "100%",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            onSubmit={(e) => sendMessage(e)}
          >
            <label>
              <p>Name:</p>
              <input
                type="text"
                name="name"
                style={{
                  padding: "5px",
                  width: "300px",
                  height: "40px",
                  backgroundColor: "#EDF2F7",
                  border: "1px solid black",
                }}
                value={state.name}
                onChange={(e) =>
                  setState((pre) => ({ ...pre, name: e.target.value }))
                }
              />
            </label>
            <label>
              <p>Message:</p>
              <textarea
                value={state.message}
                name="message"
                style={{
                  padding: "5px",
                  width: "300px",
                  height: "200px",
                  backgroundColor: "#EDF2F7",
                  marginBottom: "20px",
                }}
                onChange={(e) =>
                  setState((pre) => ({ ...pre, message: e.target.value }))
                }
              />
            </label>
            <button
              style={{
                width: "200px",
                backgroundColor: "#EDF2F7",
                height: "30px",
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div
          style={{
            width: "500px",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Chat Log</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              height: "100%",
              padding: "10px",
            }}
          >
            {renderChat()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
