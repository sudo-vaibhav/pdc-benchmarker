import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SysResources } from "..";

const Progress = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="my-12">
      <div className="text-title-3 font-medium mb-2">
        {title} ({value}%)
      </div>
      <div className="w-full bg-gray-200 rounded-large h-4">
        <div
          className="bg-blue-300 h-4 rounded-large"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};
const Sidebar = () => {
  const [{ socket, sysResources }, setState] = useState<{
    socket?: Socket;
    sysResources: SysResources;
  }>({
    sysResources: {
      ram: 0,
      cpu: 0,
    },
  });

  useEffect(() => {
    const newSocket = io(`http://localhost:4848`);
    setState((oldState) => ({ ...oldState, socket: newSocket }));

    return () => {
      newSocket.close();
    };
  }, [setState]);

  useEffect(() => {
    setInterval(() => {
      if (socket) {
        socket.emit("request-sys-resources");
      }
      socket?.on("sys-resources", (m) => {
        setState((oldState) => ({
          ...oldState,
          sysResources: m,
        }));
      });
    }, 500);
  }, [socket]);
  return (
    <div
      className="text-white p-8 flex flex-col justify-between"
      style={{
        backgroundImage: "linear-gradient(147deg, #000000 0%, #323232 90%)",
      }}
    >
      <div>
        <h1 className="text-title-1">System Vitals</h1>
        <Progress title="CPU" value={sysResources.cpu} />
        <Progress title="RAM" value={sysResources.ram} />
      </div>
      <div className="text-right">
        <p className="my-4">
          A benchmark comparison between parallel and distributed processing
          with tunable parameters and visualization
        </p>
        <p className="text-gray-300">Made with ❤️</p>
      </div>
    </div>
  );
};

export default Sidebar;
