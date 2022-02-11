# Chat-Web

The chat-web provides a platform to the users who can communicate with each other whenever they send the message, the other one would received as a real time data.

## Getting Started

Download the chat-web repo

You can now deploy the chat-web

```bash
npm start
```

In the server repo, start the server

```bash
nodemon node
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Developing

Notable libraries in use are as follows:

- `Framework`: [ReactJS](https://create-react-app.dev/docs/getting-started/)
- `Firebase FireStone`: [Firebase Firestone](https://firebase.google.com/docs/firestore)
- `Socket.io`:[Socket.io](https://socket.io/get-started/chat)

The project follows a domain approach to organizational structure of code as follows:

```bash
./src
|-- hooks
|-- App.tsx
|-- index.tsx
|-- firebase.ts
./server
|-- index.js
```
