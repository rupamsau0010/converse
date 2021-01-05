import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const [message, setMessage] = useState([])

  useEffect(() => {
    axios.get("/message/sync")
    .then((response) => {
      setMessage(response.data)
    })
  }, [])

  useEffect(() => {
    var pusher = new Pusher('3bfbe37053899c3f31cf', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('message');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessage([...message, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [message])

  
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat message={message}/>
      </div>
    </div>
  );
}

export default App;
