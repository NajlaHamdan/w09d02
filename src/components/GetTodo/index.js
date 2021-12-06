import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:4000";
const GetTodo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    try {
      let id = localStorage.getItem("id");
      const token = localStorage.getItem("user");
      console.log(token);
      const result = await axios.get(`http://localhost:4000/getTodo/${id}`,{
        headers: { Authorization: `Brearer ${token}` },
      });
      console.log(result.data);
      if (result.data === "no todos for this user") {
        setTodo([]);
      } else {
        setTodo(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteTodo = async (itemId) => {
    let id = localStorage.getItem("id");
    console.log(itemId);
    const todoId = itemId;
    const token = localStorage.getItem("user");
    const result = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/deleteTodo/${id}/${todoId}`,
      {
        headers: { Authorization: `Brearer ${token}` },
      }
    );
    console.log(result.data);
    getTodos();
  };
  const createTask = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("user");
      let id = localStorage.getItem("id"); //userId
      // const todoId="61acc1437063cd2253f029d4";
      console.log(e.target.task.value);
      const name = e.target.task.value;
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/createTodo`,
        {
          name,
          id,
        },
        {
          headers: { Authorization: `Brearer ${token}` },
        }
      );
      console.log(result);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };
  const update = async (todoId) => {
    try {
      const name = prompt("enter your todo");
      console.log(name);
      console.log(todoId);
      const token = localStorage.getItem("user");
      let id = localStorage.getItem("id"); //userId
      // const todoId="61acc1437063cd2253f029d4";
      // console.log(e.target.task.value);
      // const name = e.target.task.value;
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/updateById`,
        {
          name,
          id,
          todoId,
        },
        {
          headers: { Authorization: `Brearer ${token}` },
        }
      );
      console.log(result);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={createTask}>
        <input type="text" name="task" />
        <button>add task</button>
      </form>
      {todo.length
        ? todo.map((item) => (
            <div key={item._id}>
              <p>{item.name}</p>
              <button
                onClick={() => {
                  deleteTodo(item._id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  update(item._id);
                }}
              >
                update
              </button>
            </div>
          ))
        : "no todos for this user"}
    </div>
  );
};

export default GetTodo;
