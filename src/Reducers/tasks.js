const initialState = {
  tasks: null,
};
const tasks = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET":
      const { tasks } = payload;
      return tasks;
    case "CREAT":
      return payload;
    case "UPDATE":
    case "DELETE":
    default:
      return state;
  }
};
export default tasks;

export const get=(data)=>{
    return{
        type:"GET",
        payload:data
    }
}
export const create=(data)=>{
    return{
        type:"CREAT",
        payload:data
    }
}
export const update=(data)=>{
    return{
        type:"UPDATE",
        payload:data
    }
}
export const deleteTask=(data)=>{
    return{
        type:"DELETE",
        payload:data
    }
}