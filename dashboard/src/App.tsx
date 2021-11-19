import { BrowserRouter as Router } from "react-router-dom";
import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import Dashboard from "./views/Dashboard";

const App = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:5000`);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);
  return <Router>{socket && <Dashboard socket={socket} />}</Router>;
};

export default App;
