import { useState, useEffect } from "react"
import { db } from "../firebase"

export const useApp = () => {
  const [chat, setChat] = useState([] as any)

  useEffect(() => {
    getMessage()
  }, [])

  const getMessage = async () => {
    const tempMessage = [] as any
    const response = db.collection("123")
    const data = await response.get()
    data.docs.forEach((item) => {
      tempMessage.push(item.data())
    })
    setChat(tempMessage)
  }

  const storeChat = (name: string, chat: string) => {
    const dataBase = db.collection("123")
    dataBase
      .add({
        name: name,
        message: chat,
      })
      .then(() => {
        console.log("store message successfully")
      })
      .catch((err) => {
        console.log("err, ", err)
      })
  }

  return {
    chat,
    setChat,
    storeChat,
  }
}
