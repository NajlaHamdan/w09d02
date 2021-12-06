import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
const Admin = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        getTodos();
      }, []);
    const getTodos = async () => {
        try {
          let id = localStorage.getItem("id");
          const token = localStorage.getItem("user");
          console.log(token);
          const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/getAllTodos`,{
            headers: { Authorization: `Brearer ${token}` },
          });
          console.log(result.data);
          if (result.data === "no todos") {
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
          `${process.env.REACT_APP_BASE_URL}/deleteTodos`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(result.data);
        if (result.data === "already deleted") {
            setTodo([]);
          } else {
            setTodo(result.data);
          }
        getTodos();
      };
      const deleteUsers = async (itemId) => {
        let id = localStorage.getItem("id");
        console.log(itemId);
        const todoId = itemId;
        const token = localStorage.getItem("user");
        const result = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/deleteUsers`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(result.data);
        getTodos();
      };

    return (
        <div>
         <button
                  onClick={() => {
                    deleteTodo();
                  }}
                >
                  delete todos
                </button>
                <button
                  onClick={() => {
                    deleteUsers();
                  }}
                >
                  delete users
                </button>
        {todo.length
          ? todo.map((item) => (
              <div key={item._id}>
                <p>{item.name}</p>
               
              </div>
            ))
          : "no todos"}
      </div>
    )
}

export default Admin
