import React, { useState } from "react";
import "./App.css";
import TodoContainer from "./Components/TodoContainer";
import { Bars } from "react-loader-spinner";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let array = [];
  async function fetchData() {
    let todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await todos.json();
    array.push(data);
    setData(array);
    setLoading(true);
  }
  fetchData();

  return (
    <div>
      {loading ? (
        <TodoContainer fakeTodosArr={data} />
      ) : (
        <Bars
          height="180"
          width="180"
          color="#4fa94d"
          ariaLabel="bars-loading"
          visible={true}
        />
      )}
    </div>
  );
};

export default App;
