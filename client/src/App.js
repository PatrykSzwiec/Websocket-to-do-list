import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [socket, setSocket] = useState(null); // State for the socket connection

  useEffect(() => {
    // Initialize the socket connection once when the component mounts
    const newSocket = io('http://localhost:8000'); // Change this to your server address
    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);
  return (
    <div className="App">
      <header>
        <h1>ToDoList.app</h1>
      </header>

      <section className="tasks-section" id="tasks-section">
        <h2>Tasks</h2>

        <ul className="tasks-section__list" id="tasks-list">
          <li className="task">Shopping <button className="btn btn--red">Remove</button></li>
          <li className="task">Go out with a dog <button className="btn btn--red">Remove</button></li>
        </ul>

        <form id="add-task-form">
          <input className="text-input" autocomplete="off" type="text" placeholder="Type your description" id="task-name" />
          <button className="btn" type="submit">Add</button>
        </form>
      </section>
    </div>
  );
}

export default App;